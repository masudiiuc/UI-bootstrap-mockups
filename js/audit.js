var Audit = (function(){
    'use strict';
    
    return {
        init: initialize,
        showPopover: showPopover
    };
    
    
    function initialize() {
        
        $("#audit-list").find(".showDetails td").not('td[class="not-bind-click"]').on('click', function(){
            showAuditDetails(true);
        });
        
        $("#audit-list").find("i.fa-sticky-note").on('click', function(){
            console.log('text');
            showPopover(this);
        });
    }
    
    function showPopover(ele) {
        
        $('.fa-sticky-note').popover('destroy')
        var $popoverSettings = {
                title: 'Comment for Audit <a href="#" id="closePopover"><span style="float:right;"><i class="fa fa-close"></i> Close</span></a>',
                placement: 'right',
                container: $('#audit-list'),
                html: true,
                selector: '[rel="popover"]',
                content: getPopoverContent
            }
            
        $(ele).popover($popoverSettings);
        $(ele).popover('show');
        
        $("#closePopover").on('click', function(){
            $('.fa-sticky-note').popover('hide');    
        });
        
    }
    
    function getPopoverContent() {
        return $('#popoverContent').html();
    }
    
    function showAuditDetails(showIt) {
        
        if (showIt) {
            var detailsContent = $("#auditDetailsContent").html();
            console.log('dfasdfasd');
            $("#audit-details").html(detailsContent);
            $("#audit-item-list").hide();
            bindListenersToDetails();   
        }else{
            $("#audit-details").empty();
            $("#audit-item-list").show();
        }
    }
    
    function bindListenersToDetails(){
        
        $("#backToAudit").on('click', function(){
            showAuditDetails(false);
        });
    }
    
})();

Audit.init();