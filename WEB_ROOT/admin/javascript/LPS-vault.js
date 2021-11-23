$j(document).ready(function () {
  $j('#LPS-Vault-header').each(function () {
  hideCollapseClasses($j(this));
  hideCollapseText($j(this));
  hideCollapseTarget($j(this));
});
});

function toggleVAT() {
let $VAT = $j('#LPS-VAT');
let $link = $j('#VAT-Link')
if ($VAT.css("display") === "none") {
  $VAT.css("display","inline-block");
  $link.html("<i id='VAT-Link'>(click to hide)</i>");
} else {
  $VAT.css("display","none");
  $link.html("<i id='VAT-Link'>(click to show)</i>");
}
}