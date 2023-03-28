var attributes_values = []
var attributes_list = []
jQuery(document).ready(function () {
    if (document.location.pathname.split('/')[2] && document.location.pathname.split('/')[2] == "attributeadd" || document.location.pathname.split('/')[2] == "editattribute") {
        console.log(jQuery('#attr-values-count').first().val())
        attributes_values = jQuery('#attr-values-count').first().val() ? JSON.parse(jQuery('#attr-values-count').first().val()) : jQuery('#attr-values-count').first().val();
        var attr = attr_value_html(attributes_values)
        jQuery('#attr-values').html(attr);
    }

    if (document.location.pathname.split('/')[2] && document.location.pathname.split('/')[2] == "editecommerceprod") {
        console.log(jQuery('select'))
        for (select of jQuery('select')) {
            // var element = document.getElementById('ecomm_attr_' + i);
            if (select.name.indexOf('ecomm_attr_') > -1) {
                const example = new Choices(select, {
                    searchEnabled: false,
                    removeItemButton: true
                });
            }

        }

    }

    jQuery("select.plan-bind").bind('change', function (event) {
        var ct = jQuery('option:selected', this).attr("rel");
        var ht = levels_html(ct)
        console.log(ht);
        jQuery("#bnd-levels").html(ht);
    });

    jQuery("#act-with").click(function () {
        var data = { 'ids': [], 'act': jQuery('select[name="status"]').val() };
        jQuery("input:checked").each(function () {
            data['ids'].push(jQuery(this).val());
        });
        jQuery.ajax({
            url: "/admin/wdstates-update", // link of your "whatever" php
            type: "POST",
            async: true,
            cache: false,
            data: data, // all data will be passed here
            success: function (data) {
                location.reload();
            }
        });
    });

    jQuery("select[name='category_id']").change(function () {
        if (jQuery(this).val() != "") {
            var cid = jQuery(this).val();
            jQuery.post("/admin/subcats", { id: cid }, function (data, status) {
                var opts = '<option value=""> Select </option>';
                obj = data;
                for (var i = 0; i < obj.length; i++) {
                    opts += '<option value="' + obj[i].id + '">' + obj[i].name + '</option>';
                }
                jQuery("select[name='subcategory_id']").html(opts);
            });
            var subid = jQuery('option:selected', jQuery("#ecomm-choices-sub-category")).val();
            jQuery.post("/admin/childcats", { id: cid, subid: subid }, function (data, status) {
                var opts = '<option value=""> Select </option>';
                obj = data;
                for (var i = 0; i < obj.length; i++) {
                    opts += '<option value="' + obj[i].id + '">' + obj[i].name + '</option>';
                }
                jQuery("select[name='childcategory_id']").html(opts);


            });
        } else {
            alert("Select Category...!");
        }
    });

    jQuery("select[name='subcategory_id']").change(function () {
        if (jQuery(this).val() != "") {
            var cid = jQuery('option:selected', jQuery("#choices-category")).val();
            var subid = jQuery(this).val();
            jQuery.post("/admin/childcats", { id: cid, subid: subid }, function (data, status) {
                var opts = '<option value=""> Select </option>';
                obj = data;
                for (var i = 0; i < obj.length; i++) {
                    opts += '<option value="' + obj[i].id + '">' + obj[i].name + '</option>';
                }
                jQuery("select[name='childcategory_id']").html(opts);
            });
        } else {
            alert("Select Category...!");
        }
    });

    jQuery("#add-attr-values").click(function (event) {

        if (!jQuery('#attr_value').first().val() || !jQuery('#attr_code').first().val()) {
            alert("Value and Code is mandatory");
        } else {

            attributes_values.push({ "value": jQuery('#attr_value').first().val(), "shortcode": jQuery('#attr_code').first().val() })
            var attr = attr_value_html(attributes_values)
            jQuery('#attr-values-count').first().val(JSON.stringify(attributes_values))
            jQuery('#attr-values').html(attr);
        }
        return false
        // attributes_values.push({ "value": "", "shortcode": "" })
    })

    jQuery("input[name='unit_price']").change(function (event) {
        if (jQuery("#ecomm-choices-gst-percent").val()) {
            let gstCharge = (event.target.value * parseFloat(jQuery("#ecomm-choices-gst-percent").val())) / 100;
            jQuery("input[name='gst_amount']").val(gstCharge);

            jQuery("input[name='final_price']").val(parseFloat(gstCharge) + parseFloat(event.target.value));
        } else {
            alert(jQuery("#ecomm-choices-gst-percent").val())
        }
    })

    function categoryGst(params) {
        jQuery.ajax({
            url: "/category-gst", // link of your "whatever" php
            type: "GET",
            async: true,
            cache: false,
            data: params, // all data will be passed here
            success: function (data) {
                // location.reload();
                var opts = '';
                obj = data;
                for (var i = 0; i < obj.length; i++) {
                    opts += '<option value="' + obj[i].govt_code + '">' + obj[i].govt_code + '</option>';
                }

                jQuery("select[name='gst_code']").html(opts);
                opts = '';
                for (var i = 0; i < obj.length; i++) {
                    opts += '<option value="' + obj[i].gst + '">' + obj[i].gst + '</option>';
                }
                jQuery("select[name='gst_percent']").html(opts);
                // let attList = createAttributesList(data)
                // jQuery("#attr-list").html(attList);

                // if (document.getElementById('ecomm_attr_0')) {
                //     var element = document.getElementById('ecomm_attr_0');
                //     const example = new Choices(element, {
                //         searchEnabled: false,
                //         removeItemButton: true
                //     });
                // };
            }
        });
    }

    function makeAttrList(params) {
        jQuery.ajax({
            url: "/filter-attributes", // link of your "whatever" php
            type: "GET",
            async: true,
            cache: false,
            data: params, // all data will be passed here
            success: function (data) {
                // location.reload();
                console.log(data)
                let attList = createAttributesList(data)
                jQuery("#attr-list").html(attList);
                for (let i = 0; i < data.length; i++) {
                    if (document.getElementById('ecomm_attr_' + i)) {
                        var element = document.getElementById('ecomm_attr_' + i);
                        const example = new Choices(element, {
                            searchEnabled: false,
                            removeItemButton: true
                        });
                    };
                }

            }
        });

    }


    jQuery("#choices-category").bind('change', function (event) {
        var category_id = jQuery('option:selected', this).val();
        console.log("choices category : ", category_id)
        // alert(category_id)
        categoryGst({ cat_id: category_id })
        makeAttrList({ cat_id: category_id })

    })

    jQuery("#ecomm-choices-sub-category").bind('change', function (event) {
        let category_id = jQuery('option:selected', jQuery("#choices-category")).val();
        let sub_category_id = jQuery('option:selected', this).val();
        console.log("ecomm-choices-sub-category : ", category_id)
        // alert(category_id)
        categoryGst({ cat_id: category_id, sub_cat_id: sub_category_id, child_cat_id: -1 })
        makeAttrList({ cat_id: category_id, sub_cat_id: sub_category_id, child_cat_id: -1 })

    })

    jQuery("#ecomm-choices-child-category").bind('change', function (event) {
        let category_id = jQuery('option:selected', jQuery("#choices-category")).val();
        let sub_category_id = jQuery('option:selected', jQuery("#ecomm-choices-sub-category")).val();
        let child_category_id = jQuery('option:selected', this).val();
        console.log("ecomm-choices-child-category : ", sub_category_id)
        categoryGst({ cat_id: category_id, sub_cat_id: sub_category_id, child_cat_id: child_category_id })
        makeAttrList({ cat_id: category_id, sub_cat_id: sub_category_id, child_cat_id: child_category_id })
        // alert(category_id)

    })
});

// if (document.getElementById('ecomm-choices-sub-category')) {
//     var element = document.getElementById('ecomm-choices-sub-category');
//     const example = new Choices(element, {
//         searchEnabled: false
//     });
// };
// if (document.getElementById('ecomm-choices-child-category')) {
//     var element = document.getElementById('ecomm-choices-child-category');
//     const example = new Choices(element, {
//         searchEnabled: false
//     });
// };

function deleteAttrValue(id) {
    attributes_values.splice(id, 1);

    var attr = attr_value_html(attributes_values)
    jQuery('#attr-values-count').first().val(JSON.stringify(attributes_values))
    jQuery('#attr-values').html(attr);
    return false;
}

function attr_value_html(ct) {
    var attr = '';
    for (var i = 0; i < ct.length; i++) {
        attr += '<div id="att-value' + i + '" class="col-md-5">' +
            '<div class="form-group">' +
            '<label>Value ' + i + '</label>' +
            '<input type="text" disabled value="' + ct[i].value + '" name="value' + i + '" class="form-control" />' +
            '</div>' +
            '</div>' +
            '<div  id="att-code' + i + '" class="col-md-5">' +
            '<div class="form-group">' +
            '<label>Short Code ' + i + '</label>' +
            '<input type="text" disabled value="' + ct[i].shortcode + '" name="shortcode' + i + '" class="form-control" />' +
            '</div>' +
            '</div>' +
            '<div class="col-md-2">' +
            '<div  id="att-btn' + i + '" class="form-group">' +
            '<label>Action</label>' +
            '<input type="button" onclick="deleteAttrValue(' + i + ')" id="att-id' + i + '" value="Remove" class="form-control" />' +
            '</div>' +
            '</div>';
    }
    return attr;
}

function levels_html(ct) {
    var ht = '';
    for (var i = 1; i <= ct; i++) {
        ht += '<div class="col-md-12 row">' +
            '<div class="form-group col-md-4">' +
            '<label>Level ' + i + ' Commission</label>' +
            '<input type="text"  class="form-control" name="level' + i + '" required/>' +
            '</div>' +
            '<div class="form-group col-md-4">' +
            '<label>Level ' + i + ' Rewards</label>' +
            '<input type="number"  class="form-control" name="level_rewards' + i + '" required/>' +
            '</div>' +
            '<div class="form-group col-md-4">' +
            '<label>Level ' + i + ' Shopping Amount</label>' +
            '<input type="number"  class="form-control" name="level_shopamt' + i + '" required/>' +
            '</div>' +
            '</div>';
    }
    return ht;
}

function createAttributesList(list) {
    let attrList = '';
    for (let i = 0; i < list.length; i++) {
        attrList += '<div class="col-md-4">' +
            '<label class="">' + list[i].name + '</label>' +
            '<select class="form-control" name="ecomm_attr_' + list[i].name + '" id="ecomm_attr_' + i + '" multiple required>'
        console.log(list[i].value[0])
        for (let j = 0; j < list[i].value.length; j++) {
            console.log(list[i].value[j].value)
            attrList += '<option value="' + list[i].value[j].value + '" >' + list[i].value[j].shortcode + ':' + list[i].value[j].value + '</option>'
        }
        attrList += '</select>' +
            '</div>'
    }
    return attrList;
}

function createGSTList(list) {
    let attrList = '';
    for (let i = 0; i < list.length; i++) {
        attrList += '<div class="col-md-4">' +
            '<label class="">' + list[i].name + '</label>' +
            '<select class="form-control" name="ecomm_attr_' + i + '" id="ecomm_attr_' + i + '" multiple required>'
        console.log(list[i].value[0])
        for (let j = 0; j < list[i].value.length; j++) {
            console.log(list[i].value[j].value)
            attrList += '<option value="' + list[i].value[j].value + '" >' + list[i].value[j].shortcode + ':' + list[i].value[j].value + '</option>'
        }
        attrList += '</select>' +
            '</div>'
    }
    return attrList;
}
