
$(document).ready(function(){

  //Add Agent  mobile country code
 $("#phone").intlTelInput({
      allowDropdown: true,
      autoHideDialCode: false,
      autoPlaceholder: "on",
      dropdownContainer: "body",

      // excludeCountries: ["us"],
      formatOnDisplay: false,
      geoIpLookup: function(callback) {
        $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
          var countryCode = (resp && resp.country) ? resp.country : "";
          callback(countryCode);
        });
      },
      hiddenInput: "mobile",
      initialCountry: "auto",
      nationalMode: false,
      separateDialCode: true,
      utilsScript: "/static/admin/countrycode/js/utils.js"
    });

 

     $("#formobilenumber").intlTelInput({
      allowDropdown: true,
      autoHideDialCode: false,
      autoPlaceholder: "on",
      dropdownContainer: "body",

      // excludeCountries: ["us"],
      formatOnDisplay: false,
      geoIpLookup: function(callback) {
        $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
          var countryCode = (resp && resp.country) ? resp.country : "";
          callback(countryCode);
        });
      },
      hiddenInput: "mobile",
      initialCountry: "auto",
      nationalMode: false,
      separateDialCode: true,
      utilsScript: "/static/admin/countrycode/js/utils.js"
    });

    
    if(window.location.href.indexOf("teacher") > -1 || window.location.href.indexOf("parent") > -1)
    {
        number = $("#phone").val()
        $("#phone").intlTelInput("setNumber", '+'+ number);
        var intlNumber = $("#phone").intlTelInput("getNumber"); // get full number eg +17024181234
        var countryData = $("#phone").intlTelInput("getSelectedCountryData"); // get country data as obj
        var countryCode = countryData['dialCode'] // get the actual code eg 1 for US
        $("#countrycode").val(countryCode)
    }

     $('#mobile').keypress(function(e) {
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
      $('#Language').tagsInput({
        'width':'auto', 
        'delimiter': [','],   // Or a string with a single delimiter. Ex: ';'
        'removeWithBackspace' : true,
        'defaultText':"Language"
      });

      $('#tags_1').tagsInput({
        'width':'auto', 
        'delimiter': [','],   // Or a string with a single delimiter. Ex: ';'
        'removeWithBackspace' : true,
      });
      
      $('#tags_2').tagsInput({
        'width':'auto', 
        'delimiter': [','],   // Or a string with a single delimiter. Ex: ';'
        'removeWithBackspace' : true,
        'defaultText':"Hobbies"
      });

      $('#tags_3').tagsInput({
          'width':'auto', 
          'delimiter': [','],   // Or a string with a single delimiter. Ex: ';'
          'removeWithBackspace' : true,
          'defaultText':"Language"
      });
      
      $("#opensignup").click(function(){
        $("#login").hide()
        $("#register").show()
      })

      $("#chngelocation").click(function(){
        if ($("#chngelocation").is(":checked")) {
           $(".changedatalocation").hide()
           $(".chngegooglelocation").show()
        }
      })

      $(".parentcheck").click(function(){

        if ($(this).val() == "1") {
           $("#gradeshowdisplay").show()
        }
        else{
            $("#gradeshowdisplay").hide()
        }
      })

   $("#postteacherlession1_3").click(function(){
      if($("#postteacherlession1_3").is(':checked'))
      {
        $('.checkalllesson').prop('checked', true);
      }
      else
      {
        $('.checkalllesson').prop('checked', false);
      }
   })
      $ ("#postteacherprovdiedlession1_3").click(function(){
         if($("#postteacherprovdiedlession1_3").is(':checked'))
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
        if (checkedlength0.length == 2){
            $('#postteacherlession1_3').prop('checked', true);
        }
        else{
            $('#postteacherlession1_3').prop('checked', false);
        }

      })

      $(".checkallprovidedlesson").click(function(){
          checkallprovidedlesson = []
          $(".checkallprovidedlesson:checked").each(function() {
            checkallprovidedlesson.push($(this).val());
        });
        if (checkallprovidedlesson.length==2)
        {
            $('#postteacherprovdiedlession1_3').prop('checked', true);
        }
        else{
          $('#postteacherprovdiedlession1_3').prop('checked', false);
        }

      })

        $("#dataloc").click(function(){
        if ($("#dataloc").is(":checked")) {
         $(".changedatalocation").show()
             $(".chngegooglelocation").hide()
          }
      })
        
})


 $(document).ready(function()
{
      $(window).keydown(function(event)
      {
          if(event.keyCode == 13) {
            event.preventDefault();
            return false;
      }
  });
});

