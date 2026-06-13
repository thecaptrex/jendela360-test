param(
  [int]$Port = 4173
)

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
Write-Host "Homespeed running at http://localhost:$Port/"

try {
  while ($listener.IsListening) {
    $context = $listener.GetContext()
    $path = [Uri]::UnescapeDataString($context.Request.Url.AbsolutePath.TrimStart("/"))
    if ([string]::IsNullOrWhiteSpace($path)) {
      $path = "index.html"
    }

    $fullPath = Join-Path $root $path
    $resolvedRoot = [System.IO.Path]::GetFullPath($root)
    $resolvedPath = [System.IO.Path]::GetFullPath($fullPath)

    if (-not $resolvedPath.StartsWith($resolvedRoot) -or -not (Test-Path -LiteralPath $resolvedPath -PathType Leaf)) {
      $context.Response.StatusCode = 404
      $bytes = [System.Text.Encoding]::UTF8.GetBytes("Not found")
      $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
      $context.Response.Close()
      continue
    }

    $extension = [System.IO.Path]::GetExtension($resolvedPath).ToLowerInvariant()
    $contentType = switch ($extension) {
      ".html" { "text/html; charset=utf-8" }
      ".css" { "text/css; charset=utf-8" }
      ".js" { "application/javascript; charset=utf-8" }
      ".md" { "text/markdown; charset=utf-8" }
      default { "application/octet-stream" }
    }

    $bytes = [System.IO.File]::ReadAllBytes($resolvedPath)
    $context.Response.ContentType = $contentType
    $context.Response.ContentLength64 = $bytes.Length
    $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    $context.Response.Close()
  }
}
finally {
  $listener.Stop()
}
