$filePath = "src/app/components/AdvancedSearchCaseStudy.tsx"
$content = Get-Content -Path $filePath -Raw

# Fix Results body text
$oldText = '<p className=" font-normal text-[16px] text-white leading-[22px] mb-[38px]">The features were well received'
$newText = '<p className=" font-normal text-[16px] text-white leading-[22px] mb-[38px]" style={{ fontFamily: "'"'"'Work Sans'"'"', sans-serif" }}>The features were well received'

$content = $content -replace [regex]::Escape($oldText), $newText

[System.IO.File]::WriteAllText($filePath, $content)
Write-Host "Fixed Results body text with Work Sans font"
