$j(document).ready(AddLPSVaultResources);

function AddLPSVaultResources() {
  //$j("#LPS-Vault-header").insertBefore("#content-main > div.box-round");
  //$j("#LPS-Vault-resources").insertBefore("#content-main > div.box-round");
  $j('#content-main > h2:first').each(function () {
    hideCollapseClasses($j(this));
    hideCollapseText($j(this));
    hideCollapseTarget($j(this));
  });
  //Note to self: Figure out what's going on here
  //$j("#content-main > div.box-round").insertBefore("#LPS-plsvault_students");
  $Vframe = "<div id='LPS-Vault-target'>" +
              "<iframe id='LPS-Vault-log' src='/admin/students/studentpages/LPS-plsvault_students.html?frn=" +
              $LPS_studentfrn + "' frameborder='0'></iframe></div>";
  $j("#LPS-Vault-resources").after($Vframe);
}

function toggleVAT() {
  let $VAT = $j('#VAT');
  let $link = $j('#VAT-Link')
  if ($VAT.css("display") === "none") {
    $VAT.css("display","inline-block");
    $link.html("<i id='VAT-Link'>(click to hide)</i>");
  } else {
    $VAT.css("display","none");
    $link.html("<i id='VAT-Link'>(click to show)</i>");
  }
}