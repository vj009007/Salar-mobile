var initializejs = (function () {
    //Call .noConflict() to restore JQuery reference.
    
        var _Url;
    
        var _Load = function (url) {
            _Url = url;
            _btnSubmit = jQuery("#btnSubmit");
            _btnSubmit2 = jQuery("#btnSubmit2");
            _btnSubmit3 = jQuery("#btnSubmit3");
            _btnSubmit4 = jQuery("#btnSubmit4");
            _sub_trnx = jQuery("#sub-trnx");
            profile_btn1 = jQuery("#profile-btn1");
            subtrnxpsw = jQuery("#sub-trnx-psw");
            FormValidator();
            _LoadEvents();

            jQuery("#fpsw").click(function(){
id=$("input[name=username]").val();
if(id!=""){
                jQuery.post("/user/forgotpsw",{id:id}, function (data, status) {
                    alert("OTP Sent");
                });
            }else{
                alert("User name shouldn't be empty.");
            }
                });
        }
    
        var _LoadEvents = function () {
            _btnSubmit.on('click', login_submit);
            _btnSubmit2.on('click', SaveAgentDetails);
            profile_btn1.on('click', userProfile1);
            _btnSubmit3.on('click', saveKyc);
            _btnSubmit4.on('click', saveBank);
            _sub_trnx.on('click', saveTrnxPsw);
            subtrnxpsw.on('click', updateUsrPSW);
        }
    var updateUsrPSW=function(){
        var validator = jQuery('#userupdttrxpsw').data('bootstrapValidator');
            validator.validate();
            if (validator.isValid()) {
                document.getElementById("userupdttrxpsw").submit();
            }
    }
    var userProfile1 = function () {
            var validator = jQuery('#update-user').data('bootstrapValidator');
            validator.validate();
            if (validator.isValid()) {
                document.getElementById("update-user").submit();
            }
        }
        var saveTrnxPsw = function () {
            var validator = jQuery('#user-trxpsw').data('bootstrapValidator');
            validator.validate();
            if (validator.isValid()) {
                document.getElementById("user-trxpsw").submit();
            }
        }
        var saveKyc = function () {
            var validator = jQuery('#add-user-kyc').data('bootstrapValidator');
            validator.validate();
            if (validator.isValid()) {
                document.getElementById("add-user-kyc").submit();
            }
        }
        var saveBank = function () {
            var validator = jQuery('#add-user-bank').data('bootstrapValidator');
            validator.validate();
            if (validator.isValid()) {
                document.getElementById("add-user-bank").submit();
            }
        }
        var SaveAgentDetails = function () {
            var validator = jQuery('#add-user').data('bootstrapValidator');
            validator.validate();
            if (validator.isValid()) {
                document.getElementById("add-user").submit();
            }
        }
        
        var login_submit = function () {
            var validator = jQuery('#userlogin_form').data('bootstrapValidator');
            validator.validate();
            console.log(validator.isValid());
            if (validator.isValid()) {
                document.getElementById("userlogin_form").submit();
            }
        }
    
        var FormValidator = function () {
            jQuery('#update-user').bootstrapValidator({
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    first_name: {
                        validators: {
                            notEmpty: {
                                message: 'The name is required and cannot be empty'
                            },
                            stringLength: {
                                min: 3,
                                max: 30,
                                message: 'Name should be minimun 3 and maximum 30 characters length'
                            },
                            //  regexp: {
                            //     regexp: /^[a-zA-Z]+jQuery/,
                            //     message: 'The Name can only consist of alphabetical and no space'
                            // }
                        }
                    },
                    middle_name: {
                        validators: {
                            stringLength: {
                                min: 3,
                                max: 20,
                                message: 'Name should be minimun 3 and maximum 20 characters length'
                            }, 
                            // regexp: {
                            //     regexp: /^[a-zA-Z]+jQuery/,
                            //     message: 'The Name can only consist of alphabetical and one space'
                            // }
                        }
                    },
                    last_name: {
                        validators: {
                            notEmpty: {
                                message: 'The last name is required and cannot be empty'
                            },
                            stringLength: {
                                min: 3,
                                max: 20,
                                message: 'Name should be minimun 2 and maximum 20 characters length'
                            }, 
                            // regexp: {
                            //     regexp: /^[a-zA-Z]+jQuery/,
                            //     message: 'The Name can only consist of alphabetical and one space'
                            // }
                        }
                    },
                    mobile: {
                        validators: {
                            notEmpty: {
                                message: 'The mobile number is required and cannot be empty'
                            },
                            stringLength: {
                                min: 10,
                                max: 10,
                                message: 'Mobile number should be 10 digits'
                            }, 
                            // regexp: {
                            //     regexp: /^[0-9]+jQuery/,
                            //     message: 'The mobile number can only consist of numbers'
                            // }
                        }
                    },
                    
                      perm_address1: {
                        validators: {
                            notEmpty: {
                                message: ' ADDRESS  is required and cannot be empty'
                            },
                            stringLength: {
                                min: 5,
                                max: 30,
                                message: 'address should be minimun 5 and maximum 30 characters length'
                            }, 
                            // regexp: {
                            //     regexp: /^([a-zA-Z0-9,\-\.]+\s)*[a-zA-Z0-9,\-\.]+jQuery/,
                            //     message: 'The Name can only consist of alphabetical and one space'
                            // }
                        }
                    },
                    
                  
                     perm_address2: {
                        validators: {
                            notEmpty: {
                                message: ' ADDRESS  is required and cannot be empty'
                            },
                            stringLength: {
                                min: 5,
                                max: 30,
                                message: 'address should be minimun 5 and maximum 30 characters length'
                            }, 
                            // regexp: {
                            //     regexp: /^([a-zA-Z0-9,\-\.]+\s)*[a-zA-Z0-9,\-\.]+jQuery/,
                            //     message: 'The Name can only consist of alphabetical and one space'
                            // }
                        }
                    },
                    email: {
                        
                        validators: {
                            
                            // regexp: {
                            //     regexp: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})jQuery/,
                            //   message: 'The Email is not valid'
                            // },
                            
                            
                            notEmpty: {
                                message: 'The Email is required and cannot be empty'
                            },
                            emailAddress: {
                                message: 'The Email is not valid'
                            }
                        }
                    },
                    refferer_id: {
                        validators: {
                            notEmpty: {
                                message: 'User reference ID is required.'
                            },stringLength: {
                                min: 8,
                                max: 20,
                                message: 'Reference ID should be minimun 8 and maximum 20 characters length'
                            }
                            // regexp: {
                            //     regexp: /^[S][G][a-zA-Z0-9]jQuery/,
                            //     message: 'User Reference ID can only consist of alphanumerics'
                            // }
                        }
                    },
                    password: {
                        validators: {
                            notEmpty: {
                                message: 'The password is required and cannot be empty'
                            },
                            identical: {
                                field: 'cpsw',
                                message: 'The password and its confirm are not the same'
                            },
                            // stringLength: {
                            //     min: 8,
                            //     max: 15,
                            //     message: 'Password should be minimun 8 to 15 characters length'
                            // }, 
                            regexp: {
                                regexp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[jQuery@jQuery!%*?&])[A-Za-z\djQuery@jQuery!%*?&]{8,10}/,
                                message: 'Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character'
                            }
                        }
                    },
                    cpsw: {
                        validators: {
                            notEmpty: {
                                message: 'The password is required and cannot be empty'
                            },
                            identical: {
                                field: 'password',
                                message: 'The password and its confirm are not the same'
                            }
                        }
                    },
                    city:{
                        validators: {
                            notEmpty: {
                                message: 'The city is required and cannot be empty'
                            },stringLength: {
                                min: 5,
                                max: 30,
                                message: 'City should be minimun 5 and maximum 30 characters length'
                            }, 
                            // regexp: {
                            //     regexp: /^([a-zA-Z]+\s)*[a-zA-Z]+jQuery/,
                            //     message: 'The City can only consist of alphanumerics'
                            // }
                        }
                    },
                    pincode:{
                        validators: {
                            notEmpty: {
                                message: 'The pincode is required and cannot be empty'
                            },stringLength: {
                                min: 6,
                                max: 6,
                                message: 'Pincode should be minimun 6 and maximum 6 characters length'
                            }, 
                            // regexp: {
                            //     regexp: /([0-9]{6}|[0-9]{3}\s[0-9]{3})/,
                            //     message: 'The pincode can only consist of alphanumerics'
                            // }
                        }
                    },
                    gst_no:{
                        validators: {
                            stringLength: {
                                min: 15,
                                max: 15,
                                message: 'GST number should be minimun 15 and maximum 15 characters length'
                            }, 
                            // regexp: {
                            //     regexp: /^[A-Za-z0-9]+jQuery/,
                            //     message: 'The GST number can only consist of alphanumerics'
                            // }
                        }
                    },
                    transx_password: {
                        validators: {
                            notEmpty: {
                                message: 'The password is required and cannot be empty'
                            }, 
                            regexp: {
                                regexp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[jQuery@jQuery!%*?&])[A-Za-z\djQuery@jQuery!%*?&]{8,10}/,
                                message: 'Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character'
                            }
                        }
                    }
                }
            });
            jQuery('#add-user').bootstrapValidator({
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    first_name: {
                        validators: {
                            notEmpty: {
                                message: 'The name is required and cannot be empty'
                            },
                            stringLength: {
                                min: 3,
                                max: 30,
                                message: 'Name should be minimun 3 and maximum 30 characters length'
                            }
                        }
                    },
                    mobile: {
                        validators: {
                            notEmpty: {
                                message: 'The mobile number is required and cannot be empty'
                            },
                            stringLength: {
                                min: 10,
                                max: 10,
                                message: 'Mobile number should be 10 digits'
                            }
                        }
                    },
                    // email: {
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'The Email is required and cannot be empty'
                    //         },
                    //         emailAddress: {
                    //             message: 'The Email is not valid'
                    //         }
                    //     }
                    // },
                    refferer_id: {
                        validators: {
                            notEmpty: {
                                message: 'User reference ID is required.'
                            },stringLength: {
                                min: 8,
                                max: 20,
                                message: 'Reference ID should be minimun 15 and maximum 20 characters length'
                            }, 
                            // regexp: {
                            //     regexp: /^[S][G][a-zA-Z0-9]{13,20}jQuery/,
                            //     message: 'The Reference ID can only consist of alphanumerics and should start with SG'
                            // }
                        }
                    },
                    /* rc_date: {
                         validators: {
                             notEmpty: {
                                 message: 'The date is required and cannot be empty'
                             }
                         }
                     },*/
                    password: {
                        validators: {
                            notEmpty: {
                                message: 'The password is required and cannot be empty'
                            },
                            identical: {
                                field: 'cpsw',
                                message: 'The password and its confirm are not the same'
                            },
                            // stringLength: {
                            //     min: 8,
                            //     max: 15,
                            //     message: 'Password should be minimun 8 to 15 characters length'
                            // }, 
                            regexp: {
                                regexp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[jQuery@jQuery!%*#?&])[A-Za-z\djQuery@jQuery!%*?&]{8,10}/,
                                message: 'Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character'
                            }
                        }
                    },
                    cpsw: {
                        validators: {
                            notEmpty: {
                                message: 'The password is required and cannot be empty'
                            },
                            identical: {
                                field: 'password',
                                message: 'The password and its confirm are not the same'
                            }
                        }
                    },
                    terms_conditions:{
                        validators: {
                            notEmpty: {
                                message: 'You must agree to the terms & conditions.'
                            }
                        }
                    }
                }
            });
            //-------------login_submit
            jQuery('#userupdttrxpsw').bootstrapValidator({
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
    
                    old_psw: {
                        validators: {
                            notEmpty: {
                                message: 'The Password is required and cannot be empty'
                            }
                        }
                    },
                    trxn_psw: {
                        validators: {
                            notEmpty: {
                                message: 'The Password is required and cannot be empty'
                            }
                        }
                    },
                    new_psw: {
                        validators: {
                            notEmpty: {
                                message: 'The password is required and cannot be empty'
                            },
                            // identical: {
                            //     field: 'conf_psw',
                            //     message: 'The password and its confirm are not the same'
                            // },
                            regexp: {
                                regexp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[jQuery@jQuery!%*?&])[A-Za-z\djQuery@jQuery!%*?&]{8,10}/,
                                message: 'Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character'
                            }
                        }
                    },
                    conf_psw: {
                        validators: {
                            notEmpty: {
                                message: 'The password is required and cannot be empty'
                            },
                            identical: {
                                field: 'new_psw',
                                message: 'The password and its confirm are not the same'
                            }
                        }
                    }
    
    
                }
            });
            jQuery('#userlogin_form').bootstrapValidator({
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
    
                    username: {
                        validators: {
                            notEmpty: {
                                message: 'The User ID is required and cannot be empty'
                            },stringLength: {
                                min: 8,
                                max: 20,
                                message: 'User ID should be minimun 8 and maximum 20 characters length'
                            },
                            // regexp: {
                            //     regexp: /^[S][G][a-zA-Z0-9]+$/,
                            //     message: 'The User ID can only consist of alphanumerics'
                            // }
                        }
                    },
                    password: {
                        validators: {
                            notEmpty: {
                                message: 'The password is required and cannot be empty'
                            }, 
                            // regexp: {
                            //     regexp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\$@$!%*?&]{8,10}/,
                            //     message: 'Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character'
                            // }
                        }
                    },
                    // otp:{
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'The OTP is required and cannot be empty'
                    //         },stringLength: {
                    //             min: 4,
                    //             max: 4,
                    //             message: 'OTP should be minimun 4 and maximum 4 characters length'
                    //         }, regexp: {
                    //             regexp: /^[0-9]+jQuery/,
                    //             message: 'The OTP can only consist of numerics'
                    //         }
                    //     }
                    // }
                }
            });
            jQuery('#user-trxpsw').bootstrapValidator({
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    password: {
                        validators: {
                            notEmpty: {
                                message: 'The password is required and cannot be empty'
                            }, 
                            regexp: {
                                regexp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[jQuery@jQuery!%*?&])[A-Za-z\djQuery@jQuery!%*?&]{8,10}/,
                                message: 'Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character'
                            }
                        }
                    },
                    conf_transx_password: {
                        validators: {
                            notEmpty: {
                                message: 'The password is required and cannot be empty'
                            },
                            identical: {
                                field: 'password',
                                message: 'The password and its confirm are not the same'
                            }
                        }
                    },
                    otp: {
                        validators: {
                            notEmpty: {
                                message: 'The OTP is required and cannot be empty'
                            },
                            stringLength: {
                                min: 4,
                                max: 4,
                                message: 'OTP should be 4 digits'
                            }, 
                            // regexp: {
                            //     regexp: /^[0-9]+jQuery/,
                            //     message: 'The OTP can only consist of numbers'
                            // }
                        }
                    }
                }
            });
            jQuery('#add-user-kyc').bootstrapValidator({
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
    
                    doc_id: {
                        validators: {
                            notEmpty: {
                                message: 'The document is required and cannot be empty'
                            }
                        }
                    },
                    doc_number: {
                        validators: {
                            notEmpty: {
                                message: 'The document number is required and cannot be empty'
                            },
                            // callback:
                            // {
                            //     message: '(Aadhar:12 characters and only digits,Driving ID:16 characters,Voter ID:10 to 11 characters,Passport:8 Characters and only alphanumerics,Others : 10 to 30 Characters)',
                            //     callback: function(value, validator, jQueryfield)
                            //     {
                            //         if(jQuery("select[name='doc_id']").val()==1){
                            //             if(value.length<=12 && value.length>=12 && value.match(/^[0-9]+jQuery/)){
                            //                 return true;
                            //             }else{
                            //                 return false;
                            //             }
                            //         }else if(jQuery("select[name='doc_id']").val()==2){
                            //             if(value.length<=16 && value.length>=16  && value.match(/^[A-Za-z0-9]+jQuery/)){
                            //                 return true;
                            //             }else{
                            //                 return false;
                            //             }
                            //         }else if(jQuery("select[name='doc_id']").val()==3){
                            //             if(value.length<=10 && value.length>=10 && value.match(/^([a-zA-Z]){3}([0-9]){7}?jQuery/) ){
                            //                 return true;
                            //             }else{
                            //                 return false;
                            //             }
                            //         }else if(jQuery("select[name='doc_id']").val()==4){
                            //             if(value.length<=8 && value.length>=8 && value.match(/^[a-zA-Z0-9]+jQuery/)){
                            //                 return true;
                                          
                            //             }
                            //             else
                            //             {
                            //                 return false;
                            //             }
                            //         }else  if(jQuery("select[name='doc_id']").val()==5){
                            //             if(value.match(/^[a-zA-Z0-9]+jQuery/) && value.length >=21 && value.length <= 30){
                                            
                            //                 return true;
                            //             }else{
                                            
                            //                 return false;
                            //             }
                            //         }
                                    
                            //     }
                            // }
                        }
                    },
                    transx_password: {
                        validators: {
                            notEmpty: {
                                message: 'The password is required and cannot be empty'
                            }, 
                            // regexp: {
                            //     regexp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[jQuery@jQuery!%*?&])[A-Za-z\djQuery@jQuery!%*?&]{8,10}/,
                            //     message: 'Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character'
                            // }
                        }
                    },doc_front: {
                        validators: {
                        file: {
                                extension: 'jpeg,png,jpg',
                                type: 'image/jpeg,image/jpg,image/png',
                                // maxSize: 1 * 1024,
                                message: 'The selected file is not valid(< 1 Mb and jpeg,png,jpg)'
                        }
                        }
                            },doc_back: {
                                validators: {
                        file: {
                                extension: 'jpeg,png,jpg',
                                type: 'image/jpeg,image/jpg,image/png',
                                // maxSize: 1 * 1024,
                                message: 'The selected file is not valid(< 1 Mb and jpeg,png,jpg)'
                        }
                                }
                            }
    
                }
            });
            jQuery('#add-user-bank').bootstrapValidator({
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
    
                    bank_name: {
                        validators: {
                            notEmpty: {
                                message: 'The bank name is required and cannot be empty'
                            },
                            stringLength: {
                                min: 7,
                                max: 55,
                                message: 'Name should be minimun 7 and maximum 55 characters length'
                            }, 
                            // regexp: {
                            //     regexp: /^([a-zA-Z]+\s)*[a-zA-Z]+jQuery/,
                            //     message: 'The Name can only consist of alphabetical and one space'
                            // }
                        }
                    },
                    name_in_ac: {
                        validators: {
                            notEmpty: {
                                message: 'The name is required and cannot be empty'
                            },
                            stringLength: {
                                min: 5,
                                max: 30,
                                message: 'Name should be minimun 5 and maximum 30 characters length'
                            }, 
                            // regexp: {
                            //     regexp: /^([a-zA-Z]+\s)*[a-zA-Z]+jQuery/,
                            //     message: 'The Name can only consist of alphabetical and one space'
                            // }
                        }
                    },
                    branch_nm: {
                        validators: {
                            notEmpty: {
                                message: 'The name is required and cannot be empty'
                            },
                            stringLength: {
                                min: 3,
                                max: 30,
                                message: 'Name should be minimun 3 and maximum 30 characters length'
                            },
                            //  regexp: {
                            //     regexp: /^([a-zA-Z]+\s)*[a-zA-Z]+jQuery/,
                            //     message: 'The Name can only consist of alphabetical and one space'
                            // }
                        }
                    },
                    nominee_name: {
                        validators: {
                            // notEmpty: {
                            //     message: 'The name is required and cannot be empty'
                            // },
                            stringLength: {
                                min: 3,
                                max: 30,
                                message: 'Name should be minimun 3 and maximum 30 characters length'
                            }, 
                            // regexp: {
                            //     regexp: /^([a-zA-Z]+\s)*[a-zA-Z]+jQuery/,
                            //     message: 'The Name can only consist of alphabetical and one space'
                            // }
                        }
                    },
                    nominee_relation: {
                        validators: {
                            notEmpty: {
                                message: 'The relation is required and cannot be empty'
                            },
                            stringLength: {
                                min: 3,
                                max: 30,
                                message: 'Relation should be minimun 3 and maximum 30 characters length'
                            }, 
                            // regexp: {
                            //     regexp: /^([a-zA-Z]+\s)*[a-zA-Z]+jQuery/,
                            //     message: 'The relation can only consist of alphabetical and one space'
                            // }
                        }
                    },
                    nominee_mobile: {
                        validators: {
                            notEmpty: {
                                message: 'The mobile number is required and cannot be empty'
                            },
                            stringLength: {
                                min: 10,
                                max: 10,
                                message: 'Mobile number should be 10 digits'
                            }, 
                            // regexp: {
                            //     regexp: /^[0-9]+jQuery/,
                            //     message: 'The mobile number can only consist of numbers'
                            // }
                        }
                    },
                    ifsc: {
                        validators: {
                            notEmpty: {
                                message: 'The IFSC is required and cannot be empty'
                            },
                            stringLength: {
                                min: 11,
                                max: 11,
                                message: 'IFSC should be 11 characters length'
                            }, 
                            // regexp: {
                            //     regexp: /^[A-Z]{4}0[A-Z0-9]{6}jQuery/,
                            //     message: 'The IFSC can only consist of alpha numeric'
                            // }
                        }
                    },
                    transx_password: {
                        validators: {
                            notEmpty: {
                                message: 'The password is required and cannot be empty'
                            }, 
                            // regexp: {
                            //     regexp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[jQuery@jQuery!%*?&])[A-Za-z\djQuery@jQuery!%*?&]{8,10}/,
                            //     message: 'Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character'
                            // }
                        }
                    },
                    account_no:{
                        validators: {
                            notEmpty: {
                                message: 'The A/C number is required and cannot be empty'
                            },
                            stringLength: {
                                min: 6,
                                max: 17,
                                message: 'A/C number should be minimum 6 and maximum 17 digits'
                            }, 
                            // regexp: {
                            //     regexp: /^[0-9]+jQuery/,
                            //     message: 'The A/C number can only consist of numbers'
                            // }
                        }
                    },
                    pan_number: {
                        validators: {
                            notEmpty: {
                                message: 'The pan card is required and cannot be empty'
                            },
                            stringLength: {
                                min: 10,
                                max: 10,
                                message: 'Pan card should be minimun 10 and maximum 10 characters length'
                            }, 
                            // regexp: {
                            //     regexp: /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+jQuery/,
                            //     message: 'The pan card can only consist of alpha numerics'
                            // }
                        }
                    }    
                }
            });
    
        }
        return { Load: _Load }
    
    })();