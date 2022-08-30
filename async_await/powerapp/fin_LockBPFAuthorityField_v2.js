function lockApproverFields(executionContext) {
  var formContext = executionContext.getFormContext();
  
   //list all the enabled process in the page
  var enabledProcessses =  Xrm.Page.data.process.getEnabledProcesses();
  if(enabledProcessses != null){
    console.log('Inspect here to list all the enabled processes')
  }
  
  // try to capture page controls before verifying
  var pageControlPreptAuthority1 = Xrm.Page.getControl("header_process_cr0e2_prept_authority1");
  var pageControlPreptAuthority2 = Xrm.Page.getControl("header_process_cr0e2_prept_authority1");
  var pageControlQualityAssurance = Xrm.Page.getControl("header_process_cr0e2_qualityassurancereviewer");

  if(pageControlPreptAuthority1 != null){
    console.log('header_process_cr0e2_prept_authority1 is not null')
    pageControlPreptAuthority1.setDisabled(true)
  }
  if(pageControlPreptAuthority2 != null){
    console.log('header_process_cr0e2_prept_authority2 is not null')    
    pageControlPreptAuthority2.setDisabled(true)
  }

  if(pageControlQualityAssurance != null){
    console.log('header_process_cr0e2_qualityassurancereviewer is not null')
    
    pageControlQualityAssurance.setDisabled(true)
  }
  
  var preTenderEstimate = formContext.getAttribute("cr0e2_prept_pretenderestimate").getValue();
}