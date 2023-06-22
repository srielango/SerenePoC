import{b as i}from"../../../../_chunks/chunk-DZEAZ5MW.js";import{a as e}from"../../../../_chunks/chunk-JB6UMTNN.js";import{a as o,c as s,f as d,g as u}from"../../../../_chunks/chunk-FEDAVPE7.js";var n=s(u(),1),r=s(d(),1);$(function(){new t($("#ForgotPasswordPanel"))});var t=class extends n.PropertyPanel{getFormKey(){return i.formKey}constructor(m){super(m),this.byId("SubmitButton").click(a=>{if(a.preventDefault(),!!this.validateForm()){var c=this.getSaveEntity();(0,r.serviceCall)({url:(0,r.resolveUrl)("~/Account/ForgotPassword"),request:c,onSuccess:p=>{(0,r.information)(e.Forms.Membership.ForgotPassword.SuccessMessage,()=>{window.location.href=(0,r.resolveUrl)("~/")})}})}})}getTemplate(){return`<h2 class="text-center p-4">
    <img src="${(0,r.resolveUrl)("~/Content/site/images/serenity-logo-w-128.png")}"
        class="rounded-circle p-1" style="background-color: var(--s-sidebar-band-bg)"
        width="50" height="50" /> SerenePoC
</h2>

<div class="s-Panel p-4">
    <h5 class="text-center mb-4">${(0,r.htmlEncode)(e.Forms.Membership.ForgotPassword.FormTitle)}</h5>
    <p class="text-center">${(0,r.htmlEncode)(e.Forms.Membership.ForgotPassword.FormInfo)}</p>
    <form id="~_Form" action="">
        <div id="~_PropertyGrid"></div>
        <button id="~_SubmitButton" type="submit" class="btn btn-primary mx-8 w-100">
            ${(0,r.htmlEncode)(e.Forms.Membership.ForgotPassword.SubmitButton)}
        </button>
    </form>
</div>`}};o(t,"ForgotPasswordPanel");export{t as ForgotPasswordPanel};
//# sourceMappingURL=ForgotPasswordPage.js.map
