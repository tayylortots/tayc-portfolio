$content = Get-Content "src/app/components/AdvancedSearchCaseStudy.tsx" -Raw

# Fix "But wait!!" line - convert Tailwind font class to inline style
$content = $content -replace 'className="absolute font-\[.Press_Start_2P:Regular.,.sans-serif.\] text-\[32px\] text-\[#cce4cc\] left-1/2 -translate-x-1/2 top-\[57px\] text-center w-\[528px\] leading-\[35px\]">But wait!!', 'className="absolute text-[32px] text-[#cce4cc] left-1/2 -translate-x-1/2 top-[57px] text-center w-[528px] leading-[35px]" style={{ fontFamily: "'"'"'Press Start 2P'"'"', monospace" }}>But wait!!'

# Fix "An extra CHALLENGE appears" line
$content = $content -replace 'className="absolute font-\[.Press_Start_2P:Regular.,.sans-serif.\] text-\[15px\] text-\[#cce4cc\] left-1/2 -translate-x-1/2 top-\[106px\] text-center leading-\[35px\] whitespace-nowrap">An', 'className="absolute text-[15px] text-[#cce4cc] left-1/2 -translate-x-1/2 top-[106px] text-center leading-[35px] whitespace-nowrap" style={{ fontFamily: "'"'"'Press Start 2P'"'"', monospace" }}>An'

$content | Set-Content "src/app/components/AdvancedSearchCaseStudy.tsx"
Write-Host "Fixed Game Boy fonts successfully!"
