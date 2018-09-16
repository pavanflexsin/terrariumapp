$(document).ready(function() {

    // ----------------------------  Validate jquery custom rules ----------------
    $.validator.addMethod("password_strength", function(value) {
    regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/gm;
    match = regex.test(value)
    if (match == true ){
        return true
    }
    else{
        return false
    }
    });

    $.validator.addMethod("filesize", function(value, element) {
        if (element.files[0].size > 10485760){
            return false
        }
        else{
            return true
        }
    });

    $.validator.addMethod("checknumber", function(value) {   
        if (value.match(/\d+/g)){
            return falseuserprofile
        }
        else{
            return true
        }
    });

    
    $.validator.addMethod("age_validate", function(value) {
        var pattern =/^([0-9]{4})$/;
        match = pattern.test(value)
        if (match == true ){
            return true
        }
        else{
            return false
        }
    });
    $.validator.addMethod("checklanguagelenght", function(value) {   
        checkedlength0 = []
        $("input[type=checkbox][name='laninstrunction']:checked").each(function() {
            checkedlength0.push($(this).val());
        });
        if (checkedlength0.length==0){
            return false;
        }
        else{
            return true;
        }
    });

    $.validator.addMethod("examinationcurriculumlength", function(value) {  
    checkedlength1 = []
      $("input[type=checkbox][name='examinationcurriculum']:checked").each(function() {
            checkedlength1.push($(this).val());
        });
        if (checkedlength1.length==0){
            return false;
        }
        else{
            return true;
        }
    });

    $.validator.addMethod("localcurriculumlength", function(value) {   
          checkedlength = []
          $("input[type=checkbox][name='localcurriculum']:checked").each(function() {
                checkedlength.push($(this).val());
            });
            if (checkedlength.length==0){
                return false;
            }
            else{
                return true;
            }
    });

    $.validator.addMethod("emailz", function(value, element) {
    return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value);
    }, "Please enter a valid Email Id. e.g - (mrbrown@xyz.com)");
    // -----------------------------Validate jquery custom rules -----------------------------

    ////----------------Admin basic functionality validation ----------- ---------------------
    $("#adminlogin").validate({
        rules: {
            username: {
                required: !0,
            },
            password: {
                required: !0,
            },
        },
        messages: {
            username: {
                required: "This field is required.",
            },
            password: {
                required: "This field is required.",
            },
        },
        highlight: function(element) {
            $(element).children().addClass('error')
        },
        submitHandler: function(form) {
            $("#adminloginbtn").text("Please wait...")
            $('#adminloginbtn').attr('disabled', 'disabled');
            form.submit()
        }
    });
    $("#changeforgotpassword").validate({
        rules: {
            newpassword: {
                required: !0,
            },
            confpassword: {
                required: !0,
                equalTo: "#newpassword"
            },
        },
        messages: {
            newpassword: {
                required: "This field is required.",
            },
            confpassword: {
                required: "This field is required.",
                equalTo: "Password and confirm password does not match."
            }
        },
        highlight: function(element) {
            $(element).children().addClass('error')
        },
        submitHandler: function(form) {
            $("#changeforgotpasswordbtn").text("wait..")
            $('#changeforgotpasswordbtn').attr('disabled', 'disabled');
            $('#bcklogin').attr('disabled', 'disabled');
            form.submit()
        }
    });
    $("#updateadminprofile").validate({
        rules: {
            firstname: {
                required: !0,
            },
            username: {
                required: !0,
            },
            lastname: {
                required: !0,
            },
            email: {
                required: !0,
                email: !0,
                emailz:{required:true}
            },
            phone: {
                required: !0,
            },
            address: {
                required: !0,
            },
            profileimg: {

                required: function() {
                    if ($("#imagepath").val() == "") {
                        return !0
                    } else {
                        return !1
                    }
                }
            },
        },
        messages: {
            username: {
                required: "This field is required.",
            },
            lastname: {
                required: "This field is required.",
            },
            email: {
                required: "This field is required.",
                email: "Please enter a valid email address.",
            },
            phone: {
                required: "This field is required.",
                email: "Please enter a valid email address.",
            },
            address: {
                required: "This field is required.",
            },
            profileimg: {
                required: "This field is required.",
            },
        },
        highlight: function(element) {
            $(element).children().addClass('error')
        },
        submitHandler: function(form) {
            $("#updateadminprofilebtn").text("Please wait..")
            $('#updateadminprofilebtn').attr('disabled', 'disabled');
            form.submit()
        }
    });
    $("#adminchangepassword").validate({
        rules: {
            oldpassword: {
                required: !0,
            },
            newpassword: {
                required: !0,
                minlength: 8,
                maxlength: 16,
            },
            confirmpassword: {
                required: !0,
                equalTo: "#newpassword"
            },
        },
        messages: {
            oldpassword: {
                required: "This field is required.",
            },
            newpassword: {
                required: "This field is required.",
                password_strength: "Password should be minimum eight characters, at letter, one number and one special character.",
                minlength: "Password should be minimum of 8 characters.",
                maxlength: "Password should be maximum of 16 characters.",
            },
            confirmpassword: {
                required: "This field is required.",
                equalTo: "Password and confirm password does not match."
            }
        },
        highlight: function(element) {
            $(element).children().addClass('error')
        },
        submitHandler: function(form) {
            $("#adminchangepasswordbtn").text("Please wait..")
            $('#adminchangepasswordbtn').attr('disabled', 'disabled');
            form.submit()
        }
    });
    // Teacher upload case




    $("#adminforgotpassword").validate({
        rules: {
            email: {
                required: !0,
                email: !0,
                emailz:{required:true}
            },
        },
        messages: {
            oldpassword: {
                required: "This field is required.",
                email: "Please enter a valid email address.",
            },
        },
        highlight: function(element) {
            $(element).children().addClass('error')
        },
        submitHandler: function(form) {
            $("#adminforgotpasswordbtn").text("Please wait..")
            $('#adminforgotpasswordbtn').attr('disabled', 'disabled');
            $('#loginback').attr('disabled', 'disabled');
            form.submit()
        }
    });
    // ------------End  admin validation -------
    $("#adminuserregistration").validate({
        rules: {
            username: {
                required: !0,
                checknumber: true,
                remote: {
                    url: $("#usernameid").val(),
                    type: "get",
                },
            },
            emailid: {
                required: !0,
                email: !0,
                emailz:{required:true},
                remote: {
                    url: $("#emailexiturl").val(),
                    type: "get",
                },
            },
            password: {
                required: true,
                minlength: 8,
                password_strength: true,
            },
            conpassword: {
                required: true,
                equalTo : "#password"
            },

        },
        messages: {
            username: {
                required: "This field is required.",
                checknumber: "Number not allow.",
                remote: "User name already in use."
            }, 
            emailid: {
                required: "This field is required.",
                email: "Please enter a valid email id.",
                remote: "Email Id already in use."
            },
            password: {
                required: "This field is required.",
                minlength: "Password should be minimum of 8 characters.",
                password_strength: "Password should be minimum eight characters, at letter, one number and one special character.",
            },
            conpassword: {
                required: "This field is required.",
                equalTo :"Password and confirm password does not match"
            },
        },
        highlight: function(element) {
            $(element).children().addClass('error')
        },
        submitHandler: function(form) 
        {
            $("#userprofilebtn").text("Please wait..")
            $('#userprofilebtn').attr('disabled', 'disabled');
            form.submit()
        }
    });

    $("#editstudentuser").validate({
        rules: {
            fullname: {
                required: !0,
                checknumber: true,
            },
            lastname: {
                required: !0,
                checknumber: true,
            },
            emailid: {
                required: !0,
                email: !0,
                emailz:{required:true},
                remote: {
                    url: $("#emaileditexiturl").val(),
                    data: { email: $('#emailid').val(), userid: $('#userid').val()},
                    type: "get",
                },
            },
            mobilenumber: {
                required: !0,
                digits: true,
                countrycode : true,
                phonenumber_min_max: true
            },
            laninstrunction: {
                checklanguagelenght: function() {
                    if ($("#langu_4").is(":checked"))
                    {
                       return false
                       
                    } else {
                        return true
                    }
                }
            },
            grade:{
                 required: true,
            },
            age :{
                 required: true,
                 age_validate: true,
            },
            otherlangauge: {
                required: function() {
                    if ($("#langu_4").is(":checked")){
                        return true
                    } else {
                        return false
                    }
                }
            },
        },
        messages: {
            fullname: {
                required: "This field is required.",
                checknumber: "Number not allow.",
            }, 
            firstname: {
                required: "This field is required.",
                checknumber: "Number not allow.",
            },
            emailid: {
                required: "This field is required.",
                email: "Please enter a valid email id.",
                remote: "Email Id already in use."
            },
            mobilenumber: {
                required: "This field is required.",
                digits:"Only number allow.",
                countrycode :"Please select country code.",
                phonenumber_min_max  :"Please enter number according to country code.(8 digit for +852 and 11 digit for +86)."
            },
            laninstrunction:{
                checklanguagelenght:"This field is required.",
            },
            otherlangauge: {
                required: "This field is required."
            }, 
            grade: {
                required: "This field is required."
            },
            age: {
                required: "This field is required.",
                age_validate : "Born in shoud be YYYY format."
            },
        },
        highlight: function(element) {
            $(element).children().addClass('error')
        },
        submitHandler: function(form) {
            
            $("#userprofilebtn").text("Please wait..")
            $('#userprofilebtn').attr('disabled', 'disabled');
            form.submit()
        }
    });

    $("#userchangepwd").validate({
        rules: {
            password: {
                required: !0,
                 minlength: 8,
                password_strength: "Password should be minimum eight characters, at letter, one number and one special character.",
            },
            confpassword: {
                required: !0,
                equalTo: "#password"
            },
        },
        messages: {
            password: {
                required: "This field is required.",
                minlength: "Password should be be minimum 8 digits.",
                password_strength: "Password should be minimum eight characters, at letter, one number and one special character.",
            },
            confpassword: {
                required: "This field is required.",
                equalTo: "Password and confirm password does not match."
            }
        },
        highlight: function(element) {
            $(element).children().addClass('error')
        },
        submitHandler: function(form) {
            $("#userchangepwdbtn").text("wait..")
            $('#userchangepwdbtn').attr('disabled', 'disabled');
            form.submit()
        }
    });
        obj = false
    function CheckMobileExistLogin1()
    {   
        $.ajax({
        url: '/checkeditmobile/',
        type: 'get',
        dataType: 'json',
        data: {phone:$("#mobilenumber").val(), countrycode:$("#countrycode").val(), id :$("#useridstudent").val()},
        async: false,
        cache: false,
        success: function (data)
        {   
            debugger
            if(data.data == false)
            {
                obj = false
            }
            else{
               obj = true
            }
        }
      })
        return obj
    }
    $("#addbannerfrm").validate({
        ignore: [],
        rules: {
            page: {
                required: !0,
            },
            entitle: {
                required: !0,
            },
            cantitle: {
                required: !0,
            },
            matitle: {
                required: !0,
            },
            endescription: {
                required: !0,
            },
            candescription: {
                required: !0,
            },
            mandescription: {
                required: !0,
            },
            bannerimg: {
                required: function() {
                    if ($("#imagepath").val() == "") {
                        return !0
                    } else {
                        return !1
                    }
                }
            },
        },
        highlight: function(element) {
            $(element).children().addClass('error')
        },
        submitHandler: function(form) {
            $("#addbannerfrmbtn").text("Please wait..")
            $('#addbannerfrmbtn').attr('disabled', 'disabled');
            form.submit()
        }
    });

    // Add and edit curriculum

        $("#EditCurriculum").validate({
        ignore: [],
        rules: {
            curen: {
                required: !0,
            },
            curca: {
                required: !0,
            },
            curma: {
                required: !0,
            },
        },
        messages: {
            curen: {
                required: "This field is required.",
            },
            curca: {
                required: "This field is required.",
            },
            curma: {
                required: "This field is required.",
            },
        },
        highlight: function(element) {
            $(element).children().addClass('error')
        },
        submitHandler: function(form) {
            $("#EditCurriculumbtn").text("Please wait..")
            $('#EditCurriculumbtn').attr('disabled', 'disabled');
            form.submit()
        }
    });


    $("#teachervarification").validate({
        rules: {
            message: {
                required: !0,
            },
        },
        messages: {
            message: {
                required: "This field is required.",
            },
        },
        highlight: function(element) {
            $(element).children().addClass('error')
        },
        submitHandler: function(form) {
            $("#teachervarificationbtn").text("Please wait..")
            $('#teachervarificationbtn').attr('disabled', 'disabled');
            form.submit()
        }
    });

    
    // add cms
    $("#addcms").validate({
        ignore: [],
        rules: {
            title: {
                required: !0,
            },
            heading: {
                required: !0,
            },
            content: {
                required: function(textarea) {
                    CKEDITOR.instances[textarea.id].updateElement();
                    var editorcontent = textarea.value.replace(/<[^>]*>/gi, '');
                    return editorcontent.length === 0
                }
            },
        },
        messages: {
                title: {
                    required: "This field is required.",
                },
                heading: {
                    required: "This field is required.",
                },
                content: {
                    required: "This field is required.",
                },
        },
        highlight: function(element) {
            $(element).children().addClass('error')
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") == "content") {
                error.insertAfter("#cke_1_bottom")
            } else {
                $(element).removeClass('error');
                error.insertAfter(element);
                $(element.label).addClass('error')
            }
        },
        submitHandler: function(form) {
            $("#addcmsbtn").text("Please wait ...")
            $('#addcmsbtn').attr('disabled', 'disabled');
            form.submit()
        }
    });
    $("#addteacherprofile").validate({
        rules: {
            fullname: {
                required: !0,
                checknumber: true,
            },
            emailid: {
                required: !0,
                emailz:{required:true},
                email: !0,
                remote: {
                    url: $("#emailexiturl").val(),
                    type: "get",
                },
            },
            mobilenumber: {
                required: !0,
                digits: true,
                minlength :10,
                countrycode :true
            },
            password: {
                required: true,
                minlength: 8,
                password_strength: true,
            },
            confirmpassword: {
                required: true,
                equalTo : "#password"
            },
            age:{
                required: !0,
            },
            laninstrunction:{
                checklanguagelenght:true
            },
            examinationcurriculum:{
                examinationcurriculumlength:true
            },
            localcurriculum:{
                localcurriculumlength :true
            },
             samplenotesfile:{
                required: function() {
                    if ($(".smaplenotes").val() == "1") {
                        return !0
                    } else {
                        return !1
                    }
                },
            },
            pastpaperfile:{
                required: function() {
                    if ($(".paspaper").val() == "1") {
                        return !0
                    } else {
                        return !1
                    }
                },
            }
        },
        messages: {
            fullname:{
                required: "This field is required.",
                checknumber: "Number not allow.",
            },
            emailid: {
                required: "This field is required.",
                email: "Please enter a valid email id.",
                remote: "Email Id already in use."
            },
            mobilenumber:{
                required: "This field is required.",
                digits:"Only number allow.",
                minlength :"Mobile number should be of at least 10 digits.",
                countrycode :"Please select country code.",
            },
            password:{
                required: "This field is required.",
                minlength: "Password should be minimum of 8 characters.",
                password_strength: "Password should be minimum eight characters, at letter, one number and one special character.",
            },
            confirmpassword: {
                required: "This field is required.",
                equalTo :"Password and confirm password does not match."
            },
            age:{
                required: "Please enter your age.",
            },
            laninstrunction:{
                checklanguagelenght:"Please select at least one language."
            },
            examinationcurriculum:{
                examinationcurriculumlength : "Please select at leaset one checkbox."
            },
            localcurriculum:{
                localcurriculumlength : "Please select at leaset one checkbox."
            },
            samplenotesfile:{
                required:"This field is required.",
            },
            pastpaperfile:{
                required:"This field is required."
            }
        },
        highlight: function(element) {
            $(element).children().addClass('error')
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") == "laninstrunction") {
                error.insertAfter("#languageinstruncationrule")
            } 
            else if(element.attr("name") == "examinationcurriculum"){
                error.insertAfter("#examinationcurriculumlbl")
            }
            else if(element.attr("name") == "localcurriculum"){
                error.insertAfter("#localcurriculumlbl")
            }
            else {
                $(element).removeClass('error');
                error.insertAfter(element);
                $(element.label).addClass('error')
            }
        },
        submitHandler: function(form) {
            $("#addteacherprofilebtn").text("wait..")
            $('#addteacherprofilebtn').attr('disabled', 'disabled');
            form.submit()
        }
    });


    $("#editteacherprofile").validate({
    rules: {
        fullname: {
            required: !0,
            checknumber: true,
        },
        emailid: {
            required: !0,
            emailz:{required:true},
            email: !0,
            remote: {
                url: $("#emaileditexiturl").val(),
                data: { email: $('#emailid').val(), userid: $('#userid').val()},
                type: "get",
            },
        },
        mobilenumber: {
            required: !0,
            digits: true,
            minlength :10,
            countrycode :true
        },
        age:{
            required: !0,
        },
        laninstrunction:{
            checklanguagelenght:true
        },
        examinationcurriculum:{
            examinationcurriculumlength:true
        },
        localcurriculum:{
            localcurriculumlength :true
        },
        samplenotesfile:{
            required: function() {
                
                if ($(".smaplenotes").val() == "1" && $("#smaplenotesimagepath").val() == "") 
                {
                    return !0

                } else 
                {
                    return !1
                }
            },
        },
        pastpaperfile:{
            required: function() {
                if ($(".paspaper").val() == "1" && $("#pastpaperimagepath").val() == "") {
                    return !0
                } else {
                    return !1
                }
            },
        }
    },
    messages: {
        fullname:{
            required: "This field is required.",
            checknumber: "Number not allow.",
        },
        emailid: {
            required: "This field is required.",
            email: "Please enter a valid email id.",
            // remote: "Email Id already in use."
        },
        mobilenumber:{
            required: "This field is required.",
            digits:"Only number allow.",
            minlength :"Mobile number should be of at least 10 digits.",
            countrycode :"Please select country code.",
        },
        age:{
            required: "Please enter your age.",
        },
        laninstrunction:{
            checklanguagelenght:"Please select at least one language."
        },
        examinationcurriculum:{
            examinationcurriculumlength : "Please select at leaset one checkbox."
        },
        localcurriculum:{
            localcurriculumlength : "Please select at leaset one checkbox."
        },
        samplenotesfile:{
            required: "This field is required.",
        },
        pastpaperfile:{
            required:"This field is required."
        }
    },
    highlight: function(element) {
        $(element).children().addClass('error')
    },
    errorPlacement: function(error, element) {
        if (element.attr("name") == "laninstrunction") {
            error.insertAfter("#languageinstruncationrule")
        } 
        else if(element.attr("name") == "examinationcurriculum"){
            error.insertAfter("#examinationcurriculumlbl")
        }
        else if(element.attr("name") == "localcurriculum"){
            error.insertAfter("#localcurriculumlbl")
        }
        else {
            $(element).removeClass('error');
            error.insertAfter(element);
            $(element.label).addClass('error')
        }
    },
    submitHandler: function(form) {
        $("#addteacherprofilebtn").text("wait..")
        $('#addteacherprofilebtn').attr('disabled', 'disabled');

        form.submit()
    }
    });
    $("#addlocation").validate({
        rules: {
            locationen: {
                required: !0,
            },
            locationca: {
                required: !0,
            },
            locationma: {
                required: !0,
            },
        },
        highlight: function(element) {
            $(element).children().addClass('error')
        },

        submitHandler: function(form) {
            $("#addlocationbtn").text("Please wait..")
            $('#addlocationbtn').attr('disabled', 'disabled');
            form.submit()
        }
    });


    $('.Number,#fax,#phone,#timcurrent,#mobilenumber,#age').keypress(function(e) {
        var value = $(this).val();
        value = value.replace(/^(0*)/, "");
        $(this).val(value);
        if (e.which == 8 || e.which == 0) {
            return !0
        }
        if (e.which < 46 || e.which > 59) {
            return !1
        }
        if (e.which == 46 && $(this).val().indexOf('.') != -1) {
            return !1
        }
    });

    //Post Case

        // Post case custom validate
         $.validator.addMethod("postteacherlessionlength", function(value) { 
        checkedlength0 = []
        $("input[type=checkbox][name='postteacherlession']:checked").each(function() {
            checkedlength0.push($(this).val());
        });
        if (checkedlength0.length==0){
            return false;
        }
        else{
            return true;
        }
    });


    $.validator.addMethod("postprovidedlessionlenght", function(value) { 
        checkedlength0 = []
        $("input[type=checkbox][name='postprovidedlession']:checked").each(function() {
            checkedlength0.push($(this).val());
        });
        if (checkedlength0.length==0){
            return false;
        }
        else{
            return true;
        }
    });
    $("#editcaseuser").validate({
        rules: {
            postteacherlession: {
                 postteacherlessionlength:true
            },
            postprovidedlession: {
                 postprovidedlessionlenght:true
            },
            currnetschoolname: {
                required:true
            },
            curriculum: {
                required:true
            },
           groupsubject: {
                required:true
            },
            subject: {
                required:true
            },
            googleLocation: {
                required: function() {
                    if ($("#chngelocation").is(":checked")){
                          return !0
                    }
                    else {
                        return !1
                    }
                }
            },
            state: {
                required: function() {
                    if ($("#dataloc").is(":checked")){
                          return true
                    }
                    else {
                        return false
                    }
                }
            },
            city: {
                required: function() {
                    if ($("#dataloc").is(":checked")){
                          return true
                    }
                    else {
                        return false
                    }
                }
            },
        },
        messages: {
            postteacherlession: {
               postteacherlessionlength: "This field is required.",
            },
            postprovidedlession: {
                postprovidedlessionlenght: "This field is required.",
            },
            currnetschoolname: {
                required: "This field is required.",
            },
            curriculum: {
                required: "This field is required.",
            },
           groupsubject: {
                required: "This field is required.",
            },
            subject: {
                required: "This field is required.",
            },
            googleLocation: {
               required: "This field is required.",
            },
            state: {
                required: "This field is required.",
            },
            city: {
                required: "This field is required.",
            },

        },
        highlight: function(element) {
            $(element).children().addClass('error')
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") == "postteacherlession") {
                error.insertAfter("#postteacherlessionid")
            } 
            else if(element.attr("name") == "postprovidedlession") {
              error.insertAfter("#postteacherprovidedlessionid")
            }
            else {
              $(element).removeClass('error');
              error.insertAfter(element);
              $(element.label).addClass('error')
            }
        },
        submitHandler: function(form) {
            $("#userprofilebtn").attr('value',"Please Wait...")
            $('#userprofilebtn').attr('disabled', 'disabled');
            form.submit()
        }
    });
    $("#chngelocation").click(function(){
            if ($("#chngelocation").is(":checked")) {
               $("#state").hide()
               $("#city").hide()
               $("#location").show()
            }
    })

    $("#dataloc").click(function(){
        if ($("#dataloc").is(":checked")){
               $("#state").show()
               $("#city").show()
               $("#location").hide()
        }
  })
})
$(".paspaper").click(function() {
    if ($(this).val() == "1") {
        $("#pastpaperfile").show()
    } else {
        $("#pastpaperfile").hide()
    }
})

$("#langu_4").click(function() {
    if ($(this).is(':checked')) {
        $("#otherlangauge").show()
    } else {
        $("#otherlangauge").hide()
    }
})
$(".smaplenotes").click(function()
{
    if ($(this).val() == "1") {
        $("#samplenotesfile").show()
    } else {
        $("#samplenotesfile").hide()
    }
})

$(document).ready(function()
{
	$("#addemail").validate({
    ignore:[],
    rules: {
            title: {
                required: true,
            },
            subject: {
                required: true,
            },
            Content: {
                required: true,
            },
            content: {
		        required: function(textarea) {
		          CKEDITOR.instances[textarea.id].updateElement(); // update textarea
		          var editorcontent = textarea.value.replace(/<[^>]*>/gi, ''); // strip tags
		          return editorcontent.length === 0;
		        }
      		}
        },
        messages: 
        {
           firstname: {    
                required: "This field is required.",

            },
            lastname: {
                required: "This field is required.",

            },
            email: {    
                required: "This field is required.",
            },
            content: {    
                required: "This field is required.",
            },
        },
        highlight: function (element) {
            $(element).children().addClass('error')
        },
        errorPlacement:function(error,element){
			if(element.attr("name")=="content"){
				error.insertAfter("#cke_1_bottom")
			}
			else{
				$(element).removeClass('error');error.insertAfter(element);
				$(element.label).addClass('error')
			}
		},
        submitHandler: function(form) {
            $("#addemailbtn").text("Please wait...")
            $('#addemailbtn').attr('disabled','disabled')
            form.submit();
        }
    });
})

//----------------------- activate and deactivate menu highlight and on choose image option  -------------

$(document).ready(function()
{
    var pathname = window.location.pathname;
    $(".sidebar-menu  li ul li a").each(function(){
        var link = $(this).attr('href');
        if (link  == pathname){
            $(this).parent("li").addClass("active");
            $(this).parent("li").parent("ul").addClass('menu-open').slideDown();
        }
    })

    // On change image functionality
    $(document).on("change", '.img', function() {
        var fileSize = 0;
        var fileExtension = ['jpeg', 'png','jpg'];
        if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
            swal("Invalid file.")
            $(this).val('')
            return !1
        } else {
            readURL(this)
        }
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $("#adminphoto").attr('src', e.target.result);
                    $("#adminphoto").css('height', '100px');
                    $("#adminphoto").css('width', '100px')
                }
                reader.readAsDataURL(input.files[0])
            } else {
                $("#blah").attr('src', "/static/admin/dist/img/boxed-bg.jpg")
                $('#adminimage').val('')
            }
        }
    }
    // End on change functionlity

    // Hide and show message poup
            $(".message").click(function(){
                $("#messagetext").text($(this).attr('data-attr'))
                $("#myModal").show()
                $("#myModal").addClass('in')
            })
            $(".closepoup").click(function(){
                $("#messagetext").text($(this).attr('data-attr'))
                $("#myModal").hide()
                $("#myModal").removeClass('in')
            })
    // End hide and show popup


    // Hide and show Change Password PopUp
            $(".changemessge").click(function(){
                $("#changeuserid").val($(this).attr('data-attr'))
                $("#squarespaceModal").show()
                $("#squarespaceModal").addClass('in')
            })
            $(".closepoup").click(function(){
                $("#squarespaceModal").hide()
                $("#squarespaceModal").removeClass('in')
            })
    // End hide and show popup

        // Hide and show Change Password PopUp
            $(".teachervarifypoup").click(function(){
                $("#verifyteacher").show()
                $("#verifyteacher").addClass('in')
                $("#userid").attr('value',$(this).attr('data-attr'))
            })
            $(".closepoup1").click(function(){
                $("#verifyteacher").hide()
                $("#verifyteacher").removeClass('in')
            })
    // End hide and show popup
});

// ----------------------- End validation ---------------------
$(document).ready(function(){

     //Add Agent  mobile country code


    // Hide and show location field


      $("#chngelocation").click(function(){
        if ($("#chngelocation").is(":checked")) {
           $(".changedatalocation").hide()
           $(".chngegooglelocation").show()
        }
      })

        $("#dataloc").click(function(){
        if ($("#dataloc").is(":checked")) {
         $(".changedatalocation").show()
             $(".chngegooglelocation").hide()
          }
      })

         $("#postteacherlession_3").click(function(){
      if($("#postteacherlession_3").is(':checked'))
      {
        $('.checkalllesson').prop('checked', true);
      }
      else
      {
        $('.checkalllesson').prop('checked', false);
      }
   })
      $ ("#postteacherprovdiedlession_3").click(function(){
         if($("#postteacherprovdiedlession_3").is(':checked'))
        {
          $('.checkallprovidedlesson').prop('checked', true);
        }
        else{
          $('.checkallprovidedlesson').prop('checked', false);
        }
   })
      $(".checkalllesson").click(function(){
        checkedlength0 = []
          $(".checkalllesson:checked").each(function() {
            checkedlength0.push($(this).val());
        });
        if (checkedlength0.length==2){
            $('#postteacherlession_3').prop('checked', true);
        }
        else{
            $('#postteacherlession_3').prop('checked', false);
        }

      })

      $(".checkallprovidedlesson").click(function(){
          checkallprovidedlesson = []
          $(".checkallprovidedlesson:checked").each(function() {
            checkallprovidedlesson.push($(this).val());
        });
        if (checkallprovidedlesson.length==2)
        {
            $('#postteacherprovdiedlession_3').prop('checked', true);
        }
        else{
          $('#postteacherprovdiedlession_3').prop('checked', false);
        }

      })
})