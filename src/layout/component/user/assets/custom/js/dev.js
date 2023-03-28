jQuery(document).ready(function () {
    jQuery("select[name='country']").change(function () {
        if (jQuery(this).val() != "") {
            var cid = jQuery(this).val();
            jQuery.post("/users/states", { id: cid }, function (data, status) {
                var opts = '';
                obj = data;
                for (var i = 0; i < obj.length; i++) {
                    opts += '<option value="' + obj[i].id + '">' + obj[i].name + '</option>';
                }
                jQuery("select[name='state']").html(opts);
                // jQuery(".sub_cats_area").show();
            });
        } else {
            alert("Select Category...!");
        }
    });

    jQuery("input[name='is_org']").bind('click', function (event) {
        if (jQuery(this).is(':checked')) {
            jQuery(".orgdob").text("Register Date");
            jQuery(".usrspec").hide();
        } else {
            jQuery(".orgdob").text("DOB");
            jQuery(".usrspec").show();
        }
    });

    jQuery("select.plan-bind").bind('change', function (event) {
        var ct = jQuery('option:selected', this).attr("rel");
        var ht = levels_html(ct);
        jQuery("#prd_level").html(ht);
    });

    jQuery("#prd_level").bind('change', function (event) {
        var ct = jQuery(this).val();
        jQuery.post("/user/levelbalance", { prod: jQuery("select.plan-bind").val(), level: ct }, function (data, status) {
            jQuery("#avl_amt").val(data[0].amt);
        });
    });
    jQuery("input[name='req_amt']").keyup(function () {
        if (jQuery(this).val() > 0) {
            jQuery("#net-amt").val(jQuery(this).val() - jQuery("input[name='tdsamt']").val() - jQuery("input[name='admin_fee']").val());
        }
    });
    jQuery("input[name='sreq_amt']").keyup(function () {
        if (jQuery(this).val() > 0) {
            jQuery("#snet-amt").val(jQuery(this).val() - jQuery("input[name='stdsamt']").val() - jQuery("input[name='sadmin_fee']").val());
        }
    });
    jQuery("#send-otp").click(function () {

        jQuery.post("/users/sendotptxn", function (data, status) {
            alert("OTP Sent");
        });
    });
    jQuery("#send-otp-seller").click(function () {
        jQuery.post("/seller/sendotptxn", function (data, status) {
            alert("OTP Sent");
            jQuery("#send-otp-mark").toggleClass('d-none')
        });
    });
    jQuery("#sub-seller-trnx").click(function () {
        document.getElementById("seller-trxpsw").submit();
    });
});


function levels_html(ct) {
    var ht = '<option value="">Select</option>';
    for (var i = 1; i <= ct; i++) {
        ht +=
            '<option value="' + i + '">Level' + i + '</option>';
    }
    return ht;
}
