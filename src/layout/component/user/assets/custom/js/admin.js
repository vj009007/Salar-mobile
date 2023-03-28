var initializejs = (function () {
    
    var _Url;
    
    var _Load = function (url) {
        _Url = url;
		// _btnSubmit = $("#btnSubmit");
        // _btnSubmit2 = $("#btnSubmit2");
        // _btnSubmit3 = $("#tagsFormSub");
        // _btnSubmit4 = $("#catsFormSub");
        // FormValidator();
        // _LoadEvents();

        $("#st_act_chng").click(function () {
            var myCheckboxes = new Array();
                $("input:checked").each(function() {
                   myCheckboxes.push($(this).val());
                });
        
                $.ajax({
                    type: "POST",
                    url: _Url+"Skill/bulkActStatus",
                    dataType: 'html',
                    data: 'action='+$("#act_vals").val()+'&ids='+myCheckboxes,
                    success: function(data){
                        location.reload();
                    }
                });
                return false;
        });
    }
    var _LoadEvents = function () {
        _btnSubmit.on('click', login_submit);
        _btnSubmit2.on('click', SaveAgentDetails);
        _btnSubmit3.on('click', SaveTag);
        _btnSubmit4.on('click', SaveCats);
       // _btnSubmit5.on('click', SavePost);
    }

    var SavePost = function () {
        var validator = $('#post_form').data('bootstrapValidator');
        validator.validate();
        if (validator.isValid()) {
			document.getElementById("post_form").submit();
        }
    }
    var SaveCats = function () {
        var validator = $('#cat_form').data('bootstrapValidator');
        validator.validate();
        if (validator.isValid()) {
			document.getElementById("cat_form").submit();
        }
    }
    var SaveAgentDetails = function () {
        var validator = $('#add-user').data('bootstrapValidator');
        validator.validate();
        if (validator.isValid()) {
			document.getElementById("add-user").submit();
        }
    }
    var SaveTag = function () {
        var validator = $('#tag_form').data('bootstrapValidator');
        validator.validate();
        if (validator.isValid()) {
			document.getElementById("tag_form").submit();
        }
    }
	var login_submit = function () {
        var validator = $('#login_form').data('bootstrapValidator');
        validator.validate();
        if (validator.isValid()) {
			document.getElementById("login_form").submit();
        }

    }
    var FormValidator = function () {
        $('#add-user').bootstrapValidator({
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
                        }
                    }
                },
				mobile: {
                    validators: {
                        notEmpty: {
                            message: 'The mobile number is required and cannot be empty'
                        }
                    }
                },
                role: {
                    validators: {
                        notEmpty: {
                            message: 'The role is required and cannot be empty'
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'The Email is required and cannot be empty'
                        },
                        emailAddress: {
                            message: 'The Email  is not valid'
                        }
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
                }


            }
        }); 
		//-------------login_submit
        $('#login_form').bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
               
                username: {
                    validators: {
                        notEmpty: {
                            message: 'The Email is required and cannot be empty'
                        },
                        emailAddress: {
                            message: 'The Email  is not valid'
                        }
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: 'The password is required and cannot be empty'
                        }
                    }
                }


            }
        });
        $('#tag_form').bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
               
                name: {
                    validators: {
                        notEmpty: {
                            message: 'The name is required and cannot be empty'
                        }
                    }
                },
                name_tel: {
                    validators: {
                        notEmpty: {
                            message: 'The name is required and cannot be empty'
                        }
                    }
                },
                description: {
                    validators: {
                        notEmpty: {
                            message: 'The description is required and cannot be empty'
                        }
                    }
                },
                description_tel: {
                    validators: {
                        notEmpty: {
                            message: 'The description is required and cannot be empty'
                        }
                    }
                }


            }
        });
        $('#cat_form').bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
               
                category_name: {
                    validators: {
                        notEmpty: {
                            message: 'The name is required and cannot be empty'
                        }
                    }
                },
                categorie_name_tel: {
                    validators: {
                        notEmpty: {
                            message: 'The name is required and cannot be empty'
                        }
                    }
                },
                categorie_des: {
                    validators: {
                        notEmpty: {
                            message: 'The description is required and cannot be empty'
                        }
                    }
                },
                categorie_des_tel: {
                    validators: {
                        notEmpty: {
                            message: 'The description is required and cannot be empty'
                        }
                    }
                }


            }
        });
        $('#post_form').bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
               
                post: {
                    validators: {
                        notEmpty: {
                            message: 'The name is required and cannot be empty'
                        }
                    }
                },
                post_tel: {
                    validators: {
                        notEmpty: {
                            message: 'The name is required and cannot be empty'
                        }
                    }
                },
                description: {
                    validators: {
                        notEmpty: {
                            message: 'The description is required and cannot be empty'
                        }
                    }
                },
                description_tel: {
                    validators: {
                        notEmpty: {
                            message: 'The description is required and cannot be empty'
                        }
                    }
                }


            }
        });
    }
    return {Load: _Load}

})();

