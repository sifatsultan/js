function lockApproverFields(executionContext) {
  var formContext = executionContext.getFormContext();
  
  // try to capture page controls before verifying
  var pageControlPreptAuthority1 = Xrm.Page.getControl("header_process_cr0e2_prept_authority1");
  var pageControlPreptAuthority2 = Xrm.Page.getControl("header_process_cr0e2_prept_authority1");
  var pageControlQualityAssurance = Xrm.Page.getControl("header_process_cr0e2_qualityassurancereviewer");

  if(pageControlPreptAuthority1 != null){
    pageControlPreptAuthority1.setDisabled(true)
  }
  if(pageControlPreptAuthority2 != null){
    pageControlPreptAuthority2.setDisabled(true)
  }

  if(pageControlQualityAssurance != null){
    pageControlQualityAssurance.setDisabled(true)
  }
  
  var preTenderEstimate = formContext.getAttribute("cr0e2_prept_pretenderestimate").getValue();
}