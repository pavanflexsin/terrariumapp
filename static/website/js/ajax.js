
    $("#teacherarealocation").change(function()
    {
      $("#showdistrict").show()
      id = $(this).val()
      csrftoken = $("input[name=csrfmiddlewaretoken]").val();
      $.ajax({
        url: '/bindlocation/',
        type: 'post',
        dataType: 'json',
        data: {id:id,csrfmiddlewaretoken:csrftoken},
        async: false,
        cache: false,
        success: function (data)
        {
            if(data.data != "")
            {
              $("#teacherdistrict").html(data.data);
                
            }
        }
      })  
    })

    $("#bindgroupsubject").change(function()
    {
        $("#district").html('')
      id = $(this).val()
      csrftoken = $("input[name=csrfmiddlewaretoken]").val();
      $.ajax({
        url: '/groupsubject/',
        type: 'post',
        dataType: 'json',
        data: {id:id,csrfmiddlewaretoken:csrftoken},
        async: false,
        cache: false,
        success: function (data)
        {
            if(data.data != "")
            {
                $("#groupsubject").html(data.data)
            }
        }
      })  
    })

    $("#groupsubject").change(function()
    {
      $("#subject").html('')
      id = $(this).val()
      csrftoken = $("input[name=csrfmiddlewaretoken]").val();
      $.ajax({
        url: '/subject/',
        type: 'post',
        dataType: 'json',
        data: {id:id,csrfmiddlewaretoken:csrftoken},
        async: false,
        cache: false,
        success: function (data)
        {
            if(data.data != "")
            {
                $("#subjectsub").html(data.data) 
            }
        }
      })  
    })

    // Bind location and city
    $("#stateid").change(function()
    {
      // $("#city").html('')
      id = $(this).val()
      csrftoken = $("input[name=csrfmiddlewaretoken]").val();
      $.ajax({
        url: '/bindlocation/',
        type: 'post',
        dataType: 'json',
        data: {id:id,csrfmiddlewaretoken:csrftoken},
        async: false,
        cache: false,
        success: function (data)
        {    
            if(data.data != "")
            { 
                if((window.location.href.indexOf("/teachersearch/") > -1 ) || (window.location.href.indexOf("/postsearch/") > -1 ))
                {
                   $("#cityid").html(data.data)
                   $("#cityid").prepend('<option selected="selected" value="AllDistrict"> Select All District</option>');
                }
                else{
                  $("#cityid").html(data.data)
                }
            }
        }
      })  
    })

    $("#stateidpostcase").change(function()
    {
      id = $(this).val()
      csrftoken = $("input[name=csrfmiddlewaretoken]").val();
      $.ajax({
        url: '/bindlocation/',
        type: 'post',
        dataType: 'json',
        data: {id:id,csrfmiddlewaretoken:csrftoken},
        async: false,
        cache: false,
        success: function (data)
        {    
            if(data.data != "")
            { 
                $("#citypostcaseid").html(data.data)
            }
        }
      })  
    })




    // Edit location covered
function editlocationcovered(id)
{

  csrftoken = $("input[name=csrfmiddlewaretoken]").val();
  $.ajax({
    url: "/editlocationcov/",
    type: 'post',
    dataType: 'json',
    data: {id:id,csrfmiddlewaretoken:csrftoken},
    async: false,
    cache: false,
    success: function (data)
    {
      $('.overlay').fadeOut(0);
      $("#editlocationsCovered").fadeIn(300);
      $(".mainCon").addClass("active")
      $("#editlocationcov").html(data.dis)
      $("#edittedistrict").html(data.loca)
    }
  })  
}


$("#Resend").click(function(){
        $.ajax({
        url: '/resendverificationcode/',
        type: 'get',
        dataType: 'json',
        data: {phone : $("#verifymoile").val()},
        async: false,
        cache: false,
        success: function (data)
        {
            if(data.status == "1")
            {
              $("#mesg").text(data.data)
              $("#textmobilenumber").text(ata.number)
              $("#verifymoile").val(data.number)
            }
            else if(data.status == "2")
            {
                $("#mesg").text(data.data)
            }
            else{
                $("#mesg").text(data.data)
            }
        }
      })
})


// Student view case detail
function viewcasedetail(id,cid)
{ 

      csrftoken = $("input[name=csrfmiddlewaretoken]").val();
      $.ajax({
        url: '/studentcasedetail/',
        type: 'post',
        dataType: 'json',
        data: {id:id,postid:cid,csrfmiddlewaretoken:csrftoken},
        async: false,
        cache: false,
        success: function (data)
        {
          $('.overlay').fadeOut(0);
          $("#caseDetails").fadeIn(300);
          $(".mainCon").addClass("active")
          $("#Private").text(data.data.grouplesson)
          $("#onsite").text(data.data.onlinles)
          $("#gender").text(data.data.gender)
          $("#location").text(data.data.location)
          $("#School").text(data.data.currentschool)
          $("#discount").text(data.data.discount)
          $("#notes").text(data.data.notesprovided)
          $("#past").text(data.data.pastpapers)
          $("#exp").text(data.data.minexp)
          $("#mined").text(data.data.mineducation)
          $("#maxprice").text(data.data.maxprice)
          $("#curriculum").text(data.data.curriculum)
          $("#subject").text(data.data.subject)
          $("#Specialre").text(data.data.specialrequiremnt)
          if (data.data.val != "1")
          {
            $("#showing").attr('src',data.data.teacherdetail.image)
            $("#name").text(data.data.teacherdetail.fullname)
            $("#email").text(data.data.teacherdetail.email)
            $("#phonetg").text('+'+data.data.teacherdetail.mobile)
          }
          else{
            $("#teacherdetail").hide()
          }
        }
})
}

function ViewTeacherCaseDetail(id,cid)
{   
      csrftoken = $("input[name=csrfmiddlewaretoken]").val();
      $.ajax({
        url: "/teachercasedetail/",
        type: 'post',
        dataType: 'json',
        data: {id:id,postid:cid,csrfmiddlewaretoken:csrftoken},
        async: false,
        cache: false,
        success: function (data)
        {
          $('.overlay').fadeOut(0);
          $("#teachercaseDetails").fadeIn(300);
          $(".mainCon").addClass("active")
          $("#Private").text(data.data.grouplesson)
          $("#onsite").text(data.data.onlinles)
          $("#gender").text(data.data.gender)
          $("#location").text(data.data.location)
          $("#School").text(data.data.currentschool)
          $("#discount").text(data.data.discount)
          $("#notes").text(data.data.notesprovided)
          $("#past").text(data.data.pastpapers)
          $("#exp").text(data.data.minexp)
          $("#mined").text(data.data.mineducation)
          $("#maxprice").text(data.data.maxprice)
          $("#curriculum").text(data.data.curriculum)
          $("#subject").text(data.data.subject)
          $("#Specialre").text(data.data.specialrequiremnt)
          if (data.data.val != "1"){
            $("#showing").attr('src',data.data.teacherdetail.image)
            $("#name").text(data.data.teacherdetail.fullname)
            $("#email").text(data.data.teacherdetail.email)
            $("#phonetg").text('+'+data.data.teacherdetail.mobile)
          }
          else{
            $("#teacherdetail").hide()
          }
          if(data.data.casestatus != "4"){
            $("#casecomplete").show()
            $("#Completed").hide()
            $("#completedcaseid").attr('href','/teachercasecomplete/'+data.data.caseid+'/')
          }
          else{
              $("#casecomplete").hide()
              $("#Completed").show()
          }
        }
  })
}
// Search case view Result





// Delete direct teaching expirence
function  deletdirectteacher(id) {
  csrftoken = $("input[name=csrfmiddlewaretoken]").val();
  $.ajax({
        url: '/deletedirectteacingexp/',
        type: 'post',
        dataType: 'json',
        data: {id:id,csrfmiddlewaretoken:csrftoken},
        async: false,
        cache: false,
        success: function (data)
        {
          $("#direct_"+id).remove()
        }
  })
}


// Delete direct teaching expirence

function  otherdeletdirectteacher(id) {
  csrftoken = $("input[name=csrfmiddlewaretoken]").val();
  $.ajax({
        url: '/otherdeletedirectteacingexp/',
        type: 'post',
        dataType: 'json',
        data: {id:id,csrfmiddlewaretoken:csrftoken},
        async: false,
        cache: false,
        success: function (data)
        {
          $("#otherdirect_"+id).remove()
        }
  })
}

// Edit teacher Bind dynamic function dropdowb

