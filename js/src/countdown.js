jQuery(document).ready(function() {
  $('#countdown').ClassyCountdown({
      end: $.now() + (((new Date('October 1, 2016 14:00:00')).getTime() - $.now())/1000),
      labels: true,
      style: {
          element: "",
          textResponsive: .5,
          days: {
              gauge: {
                  thickness: .03,
                  bgColor: "rgba(255,255,255,0.05)",
                  fgColor: "#1abc9c"
              },
              textCSS: 'font-family:\'helvetica\'; font-size:25px; font-weight:300; color:#fff;'
          },
          hours: {
              gauge: {
                  thickness: .03,
                  bgColor: "rgba(255,255,255,0.05)",
                  fgColor: "#2980b9"
              },
              textCSS: 'font-family:\'helvetica\'; font-size:25px; font-weight:300; color:#fff;'
          },
          minutes: {
              gauge: {
                  thickness: .03,
                  bgColor: "rgba(255,255,255,0.05)",
                  fgColor: "#8e44ad"
              },
              textCSS: 'font-family:\'helvetica\'; font-size:25px; font-weight:300; color:#fff;'
          },
          seconds: {
              gauge: {
                  thickness: .03,
                  bgColor: "rgba(255,255,255,0.05)",
                  fgColor: "#f39c12"
              },
              textCSS: 'font-family:\'helvetica\'; font-size:25px; font-weight:300; color:#fff;'
          }

      },
      onEndCallback: function() {
          console.log("Time out!");
      }
  });
});
