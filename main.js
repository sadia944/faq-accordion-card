


var acc = document.getElementsByClassName("faq");
var i;

var firstFaq = acc[0];
var firstPanel = firstFaq.nextElementSibling;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    var isActive = this.classList.contains("active");
    let arrow = this.getElementsByClassName('arrow')[0]
    let upArrow = arrow.classList.contains('up')

    var allFaqs = document.getElementsByClassName("faq");
    let allArrows = document.getElementsByClassName('arrow')
    for (j = 0; j < allFaqs.length; j++) {
      allFaqs[j].classList.remove("active");
      allArrows[j].classList.remove('up');
      
      

      var panel = allFaqs[j].nextElementSibling;
      var maxHeightValue = getStyle(panel, "maxHeight");
    
    if (maxHeightValue !== "0px") {
        panel.style.maxHeight = null;
        
      }
      
    }

    // Toggle the clicked section using a ternary operator
    // isActive ? this.classList.remove("active") : this.classList.add("active");

    if (isActive == true) {
      this.classList.remove('active')
      arrow.classList.remove('up')
    } else {
      this.classList.add('active')
      arrow.classList.add('up')
    }

    // Toggle the panel element
    var panel = this.nextElementSibling;
    var maxHeightValue = getStyle(panel, "maxHeight");
    
    if (maxHeightValue !== "0px") {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
}

  function getStyle(el, styleProp) {
    var value, defaultView = (el.ownerDocument || document).defaultView;
    if (defaultView && defaultView.getComputedStyle) {
      styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
      return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    } else if (el.currentStyle) { 
      styleProp = styleProp.replace(/\-(\w)/g, function(str, letter) {
        return letter.toUpperCase();
      });
      value = el.currentStyle[styleProp];
      if (/^\d+(em|pt|%|ex)?$/i.test(value)) { 
        return (function(value) {
          var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
          el.runtimeStyle.left = el.currentStyle.left;
          el.style.left = value || 0;
          value = el.style.pixelLeft + "px";
          el.style.left = oldLeft;
          el.runtimeStyle.left = oldRsLeft;
          return value;
        })(value);
      }
      return value;
    }
  }




  