/*
 * jQuery v1.9.1 included
 */

$(document).ready(function() {

  // social share popups
  $(".share a").click(function(e) {
    e.preventDefault();
    window.open(this.href, "", "height = 500, width = 500");
  });

  // toggle the share dropdown in communities
  $(".share-label").on("click", function(e) {
    e.stopPropagation();
    var isSelected = this.getAttribute("aria-selected") == "true";
    this.setAttribute("aria-selected", !isSelected);
    $(".share-label").not(this).attr("aria-selected", "false");
  });

  $(document).on("click", function() {
    $(".share-label").attr("aria-selected", "false");
  });

  // show form controls when the textarea receives focus or backbutton is used and value exists
  var $commentContainerTextarea = $(".comment-container textarea"),
      $commentContainerFormControls = $(".comment-form-controls");

  $commentContainerTextarea.one("focus", function() {
    $commentContainerFormControls.show();
  });

  if ($commentContainerTextarea.val() !== "") {
    $commentContainerFormControls.show();
  }

  // Submit requests filter form in the request list page
  $("#request-status-select, #request-organization-select")
    .on("change", function() {
      search();
    });

  // Submit requests filter form in the request list page
  $("#quick-search").on("keypress", function(e) {
    if (e.which === 13) {
      search();
    }
  });

  function search() {
    window.location.search = $.param({
      query: $("#quick-search").val(),
      status: $("#request-status-select").val(),
      organization_id: $("#request-organization-select").val()
    });
  }

  // Submit organization form in the request page
  $("#request-organization select").on("change", function() {
    this.form.submit();
  });
  $(".happening-tabs a").on('click',function(){
    var h=$(this).attr('href');
    $(".happening-tabs a").removeClass('active');
    $(this).addClass('active');
    $('.happening-content .category .section').css('display','none');
    $('#'+h.split('#')[1]).css('display','inline-block');
  });
$('.globeIt').click(function(e){
			var s=$(this).attr('data-show');
			if(s==0)
			{
				$('.nav-menu-global').show();
				$(this).attr('data-show',1).addClass('nav-menu-global-show');
			}
			else
			{
				$('.nav-menu-global').hide();
				$(this).attr('data-show',0).removeClass('nav-menu-global-show');
			}
			e.stopPropagation();
		});
		$('.searchIt').click(function(e){
			var s=$(this).attr('data-show');
			if(s==0)
			{
				$('.nav-menu-search').show();
        $('#csearch').focus();
				$(this).attr('data-show',1).addClass('nav-menu-search-show');
			}
			else
			{
				$('.nav-menu-search').hide();
				$(this).attr('data-show',0).removeClass('nav-menu-search-show');
			}
			e.stopPropagation();
		})
		$(document).on('click',function(e){
			var t=$(e.target).closest('.globeIt.nav-menu-global-show');
			if(!t.length)
			{
				$('.nav-menu-global').hide();
				$('.globeIt').attr('data-show',0).removeClass('nav-menu-global-show');
			}
			var s=$(e.target).closest('.searchIt.nav-menu-search-show'),sinput=$(e.target).closest('.nav-menu-search');
			if(!s.length&&!sinput.length)
			{
				$('.nav-menu-search').hide();
				$('.searchIt').attr('data-show',0).removeClass('nav-menu-search-show');
			}
		});
		$('#csearch').bind('keypress',function(e){
			if(e.keyCode==13)
			{
				var value=$('#csearch').val();
				window.location.href='https://www.yeastar.com/?s='+value+'&lang=en';
			}
		})
    window.onscroll=function(){
			if($(document).scrollTop()<=0)
			{
				$('.header-menu').removeClass('header-menu-sticky');
			}
      else
      {
        $('.header-menu').addClass('header-menu-sticky');
      }
		}
 		// 课程时间
    t0 = new Date('2019-02-18T09:00:00Z');
    t1 = new Date('2019-02-19T09:00:00Z');
    t2 = new Date('2019-02-20T09:00:00Z');
    t3 = new Date('2019-02-21T09:00:00Z');
    t4 = new Date('2019-03-04T14:00:00Z');
    t5 = new Date('2019-03-05T14:00:00Z');
    t6 = new Date('2019-03-06T14:00:00Z');
    t7 = new Date('2019-03-07T14:00:00Z');
    t8 = new Date('2019-03-13T14:30:00Z');
    t9 = new Date('2019-03-14T14:30:00Z');
    t10 = new Date('2019-03-18T09:00:00Z');
    t11 = new Date('2019-03-19T09:00:00Z');
  
    t12 = new Date('2019-03-20T09:00:00Z');
    t13 = new Date('2019-03-21T09:00:00Z');
    t14 = new Date('2019-03-25T09:00:00Z');
    t15 = new Date('2019-03-26T09:00:00Z');
    t16 = new Date('2019-03-27T09:00:00Z');
    t17 = new Date('2019-03-28T09:00:00Z');

    // 显示当地时间
    var dateArray = [t17,t16,t15,t14,t13,t12,t11,t10,t9,t8,t7,t6,t5,t4,t3,t2,t1,t0];
    addDate();
    function addDate() {
        dateNum = dateArray.length;
        for (var x = 0,y = dateNum-1; x < dateNum,y >= 0; x++,y--) {
            i = x;
            t = dateArray[y];
            times(i,t);
        }
    }

    function times(i,t) {
        var str = t.toTimeString().split(' ');
        jQuery('.schedule-date').eq(i).html(t.toLocaleDateString()+' '+str[0]+'<br>'+str[1]+str[2]);
    }
});
