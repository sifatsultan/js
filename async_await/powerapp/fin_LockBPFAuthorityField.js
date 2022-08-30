function lockApproverFields(executionContext) {
  var formContext = executionContext.getFormContext();
  Xrm.Page.getControl("header_process_cr0e2_prept_authority1").setDisabled(true);
  Xrm.Page.getControl("header_process_cr0e2_prept_authority2").setDisabled(true);
  Xrm.Page.getControl("header_process_cr0e2_qualityassurancereviewer").setDisabled(true);
  var preTenderEstimate = formContext.getAttribute("cr0e2_prept_pretenderestimate").getValue();
}