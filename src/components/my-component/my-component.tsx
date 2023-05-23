import { Component, h, Element} from '@stencil/core';
import 'admir-progress-meter';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Element() el;
  componentDidLoad() {

    // this.parentComponent = this.el.parentElement;
    // const a: AdmirDeleteBeforeUpload = new AdmirDeleteBeforeUpload();

    console.log("this.el", this.el)

   const apm1 = this.el.shadowRoot.querySelector('#apm1');
   console.log("this.el", apm1);

   let progress1 = 0;
   const timerRef1 = setInterval(() => {
    // this.updateProgress(timerRef);
    progress1 += 5;
    if (progress1 >= 100) {
      progress1 = 100;
      clearTimeout(timerRef1);
    }

    apm1.updateProgress(progress1);

  }, 500);

  //  x.updateProgress(30);
  }

  render() {
    return <div>

      <hr />

      <admir-progress-meter id="apm1" width="100%" height="40px" color="black" font_size="40px" border_radius='100px'
        background_color_static="#f2f2f2" background_color_meter="gray" ad_style="horizontal">

      </admir-progress-meter>

      <hr />

    </div>;
  }
}
