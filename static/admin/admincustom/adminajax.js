// Delete question
function DeleteContact(id, csrftoken)
{  

        swal({  
          title: "Are you sure you want to delete this?",   
          type: "warning",  
          showCancelButton: true,  
          confirmButtonColor: "#DD6B55",  
          confirmButtonText: "Yes",  
          cancelButtonText: "No",  
          closeOnConfirm: false,  
          closeOnCancel: false  
        },
        function(isConfirm)   
        {  
          if (isConfirm)  
          {  
              $.ajax({
                url: '/admin/deletecontact/',
                type: 'post',
                dataType: 'json',
                data: {id:id,csrfmiddlewaretoken:csrftoken},
                async: false,
                cache: false,
                success: function (data)
                {
                  if(data.messages == "1")
                  { 
                      $("#contact_"+id).remove();
                      swal("Good job", "Contact details deleted successfully", "success");
                  }
                  else
                  {
                    swal("Cancelled", "Something went wrong", "error");
                  }
                }
              })  
          }
          else   
          {  
              swal("Cancelled", "You have Cancelled delete request.", "error");  
          }
        });
}


function DeleteTestimonail(id, csrftoken)
{     

        swal({  
          title: "Are you sure you want to delete this?",   
          type: "warning",  
          showCancelButton: true,  
          confirmButtonColor: "#DD6B55",  
          confirmButtonText: "Yes", 
          cancelButtonText: "No",  
          closeOnConfirm: false,  
          closeOnCancel: false  
        },
        function(isConfirm)   
        {  
          if (isConfirm)  
          {  
              $.ajax({
                url: '/admin/deletetestimonial/',
                type: 'post',
                dataType: 'json',
                data: {id:id,csrfmiddlewaretoken:csrftoken},
                async: false,
                cache: false,
                success: function (data)
                {
                  if(data.messages == "1")
                  { 
                      $("#testm_"+id).remove();
                      swal("Good job", "Testimonial deleted successfully.", "success");
                  }
                  else
                  {
                    swal("Cancelled", "Something went wrong.Try again letter.", "error");
                  }
                }
              })  
          }
          else   
          {  
              swal("Cancelled", "You have Cancelled delete request.", "error");  
          }
        });
}

function DeleteCase(id, csrftoken)
{   

        swal({  
          title: "Are you sure you want to delete this?",   
          type: "warning",  
          showCancelButton: true,  
          confirmButtonColor: "#DD6B55",  
          confirmButtonText: "Yes", 
          cancelButtonText: "No",  
          closeOnConfirm: false,  
          closeOnCancel: false  
        },
        function(isConfirm)   
        {  
          if (isConfirm)  
          {  
              $.ajax({
                url: '/admin/deletecase/',
                type: 'post',
                dataType: 'json',
                data: {id:id,csrfmiddlewaretoken:csrftoken},
                async: false,
                cache: false,
                success: function (data)
                {
                  if(data.messages == "1")
                  { 
                      $("#case_"+id).remove();
                      swal("Good job", "Case deleted successfully", "success");
                  }
                  else
                  {
                    swal("Cancelled", "Something went wrong", "error");
                  }
                }
              })  
          }
          else   
          {  
              swal("Cancelled", "You have Cancelled delete request.", "error");  
          }
        });
}


function DeleteNotification(id, csrftoken)
{   

        swal({  
          title: "Are you sure you want to delete this?",   
          type: "warning",  
          showCancelButton: true,  
          confirmButtonColor: "#DD6B55",  
          confirmButtonText: "Yes", 
          cancelButtonText: "No",  
          closeOnConfirm: false,  
          closeOnCancel: false  
        },
        function(isConfirm)   
        {  
          if (isConfirm)  
          {  
              $.ajax({
                url: '/admin/deletenotification/',
                type: 'post',
                dataType: 'json',
                data: {id:id,csrfmiddlewaretoken:csrftoken},
                async: false,
                cache: false,
                success: function (data)
                {
                  if(data.messages == "1")
                  { 
                      $("#not_"+id).remove();
                      swal("Good job", "Notification deleted successfully", "success");
                  }
                  else
                  {
                    swal("Cancelled", "Something went wrong", "error");
                  }
                }
              })  
          }
          else   
          {  
              swal("Cancelled", "You have Cancelled delete request.", "error");  
          }
        });
}




function DeleteUserAccount(id, csrftoken)
{   

        swal({  
          title: "Are you sure you want to delete this?",   
          type: "warning",  
          showCancelButton: true,  
          confirmButtonColor: "#DD6B55",  
          confirmButtonText: "Yes", 
          cancelButtonText: "No",  
          closeOnConfirm: false,  
          closeOnCancel: false  
        },
        function(isConfirm)   
        {  
          
          if (isConfirm)  
          {  
              $.ajax({
                url: '/admin/userdeleteaccount/',
                type: 'post',
                dataType: 'json',
                data: {id:id,csrfmiddlewaretoken:csrftoken},
                async: false,
                cache: false,
                success: function (data)
                {
                  if(data.messages == "1")
                  { 
                      $("#delete_"+id).remove();
                      swal("Good job", "User deleted successfully", "success");
                  }
                  else
                  {
                    swal("Cancelled", "Something went wrong", "error");
                  }
                }
              })  
          }
          else   
          {  
              swal("Cancelled", "You have Cancelled delete request.", "error");  
          }
        });
}


function TeacherVarification(csrftoken)
{    
    status = $("#status").val()
    mesage = $("#message").val()
    if (mesage == "")
    {
      alert("This field is required.")
      return false;
    }
    $.ajax({
      url: '/admin/teacherverification/',
      type: 'post',
      dataType: 'json',
      data: {id: $("#userid").val(),csrfmiddlewaretoken:csrftoken,status:status,mesage: mesage},
      async: false,
      cache: false,
      success: function (data)
      {
        if(data.messages == "1")
        { 
            $("#squarespaceModal").hide()
            $("#squarespaceModal").removeClass('in')
            swal("Good job", "Approval message send to the teacher successfully.", "success");
            setTimeout(function() {
              location.href = window.location.href 
              }, 2000);
        }
        else
        {
          swal("Cancelled", "Something went wrong", "error");
        }
      }
    })  
}


function DeleteNotification(id, csrftoken)
{   

        swal({  
          title: "Are you sure you want to delete this?",   
          type: "warning",  
          showCancelButton: true,  
          confirmButtonColor: "#DD6B55",  
          confirmButtonText: "Yes", 
          cancelButtonText: "No",  
          closeOnConfirm: false,  
          closeOnCancel: false  
        },
        function(isConfirm)   
        {  
          if (isConfirm)  
          {  
              $.ajax({
                url: '/admin/deletenotification/',
                type: 'post',
                dataType: 'json',
                data: {id:id,csrfmiddlewaretoken:csrftoken},
                async: false,
                cache: false,
                success: function (data)
                {
                  if(data.messages == "1")
                  { 
                      $("#not_"+id).remove();
                      swal("Good job", "Notification deleted successfully", "success");
                  }
                  else
                  {
                    swal("Cancelled", "Something went wrong", "error");
                  }
                }
              })  
          }
          else   
          {  
              swal("Cancelled", "You have Cancelled delete request.", "error");  
          }
        });
}




function DeleteUser(id, csrftoken)
{   

        swal({  
          title: "Are you sure you want to delete this?",   
          type: "warning",  
          showCancelButton: true,  
          confirmButtonColor: "#DD6B55",  
          confirmButtonText: "Yes", 
          cancelButtonText: "No",  
          closeOnConfirm: false,  
          closeOnCancel: false  
        },
        function(isConfirm)   
        {  
          if (isConfirm)  
          {  
              $.ajax({
                url: '/admin/deletecontact/',
                type: 'post',
                dataType: 'json',
                data: {id:id,csrfmiddlewaretoken:csrftoken},
                async: false,
                cache: false,
                success: function (data)
                {
                  if(data.messages == "1")
                  { 
                      $("#delete_"+id).remove();
                      swal("Good job", "User deleted successfully", "success");
                  }
                  else
                  {
                    swal("Cancelled", "Something went wrong", "error");
                  }
                }
              })  
          }
          else   
          {  
              swal("Cancelled", "You have Cancelled delete request.", "error");  
          }
        });
}
// POST Case

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
                $("#subject").html(data.data) 
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
                $("#cityid").html(data.data) 
            }
        }
      })  
    })

function viewcasedetail(id)
{    
      csrftoken = $("input[name=csrfmiddlewaretoken]").val();
      $.ajax({
        url: '/admin/casedetail',
        type: 'post',
        dataType: 'json',
        data: {id:id,csrfmiddlewaretoken:csrftoken},
        async: false,
        cache: false,
        success: function (data)
        {
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
          $("#casedetail").show()
          $("#casedetail").addClass('in')
        }
  })
}