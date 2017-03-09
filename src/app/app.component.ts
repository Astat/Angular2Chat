import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private connected:boolean = false;

  private users: Array<String> = ["Alban", "Ulises", "Sebastien"]

  private messages: Array<any> = [
    {
      "time": "15:45:28",
      "author": "Ulises",
      "text": "Cras ac tellus quis purus cursus mattis a vitae eros. Morbi tempus ligula vitae placerat suscipit."
    },
    {
      "time": "15:45:34",
      "author": "Sebastien",
      "text": "Vivamus tristique leo eu ligula lobortis, eget interdum dolor elementum."
    },
    {
      "time": "15:45:40",
      "author": "Ulises",
      "text": "Vivamus elementum neque ac pretium imperdiet."
    },
    {
      "time": "15:45:48",
      "author": "Sebastien",
      "text": "Aenean sed sapien facilisis, iaculis magna ut, interdum urna."
    },
    {
      "time": "15:45:51",
      "author": "Alban",
      "text": "Donec eu purus sit amet magna tempor laoreet. Vivamus egestas nunc non dolor dignissim mattis. Nam quis lacus id est tempus maximus non non diam."
    },
    {
      "time": "15:45:58",
      "author": "Ulises",
      "text": "Morbi vehicula nisl a interdum pretium."
    },
    {
      "time": "15:46:11",
      "author": "Sebastien",
      "text": "Aliquam sollicitudin mi sed tellus ultricies, sed condimentum ligula consequat."
    },
    {
      "time": "15:47:21",
      "author": "Alban",
      "text": "Donec tristique risus lacinia vestibulum accumsan."
    },
    {
      "time": "15:48:18",
      "author": "Alban",
      "text": "Cras laoreet ex et porttitor malesuada."
    },
    {
      "time": "15:48:24",
      "author": "Sebastien",
      "text": "Donec in"
    },
    {
      "time": "15:48:32",
      "author": "Alban",
      "text": "Nam fermentum nisi at ipsum commodo finibus sit amet ut risus."
    },
    {
      "time": "15:48:40",
      "author": "Ulises",
      "text": "Phasellus fermentum ex ac ipsum mollis, eget pellentesque ex dictum."
    },
    {
      "time": "15:48:55",
      "author": "Ulises",
      "text": "Aliquam vitae magna quis ante tincidunt consequat."
    },
    {
      "time": "15:49:34",
      "author": "Sebastien",
      "text": "Donec in"
    },
    {
      "time": "15:50:21",
      "author": "Sebastien",
      "text": "Suspendisse quis enim in metus volutpat hendrerit."
    },
    {
      "time": "15:50:22",
      "author": "Ulises",
      "text": "Nulla auctor lectus vitae ornare rhoncus."
    },
    {
      "time": "15:50:30",
      "author": "Sebastien",
      "text": "Phasellus fermentum ex ac ipsum mollis, eget pellentesque ex dictum."
    },
    {
      "time": "15:50:31",
      "author": "Alban",
      "text": "Pellentesque nec sapien eget leo accumsan fringilla. Donec at ante quis purus mollis commodo sit amet non est."
    },
    {
      "time": "15:50:41",
      "author": "Ulises",
      "text": "Proin hendrerit elit sit amet nibh hendrerit lobortis."
    },
    {
      "time": "15:50:47",
      "author": "Sebastien",
      "text": "Curabitur fermentum lacus at nunc vestibulum placerat. Mauris at arcu pharetra, ullamcorper turpis vitae, varius justo."
    },
    {
      "time": "15:50:50",
      "author": "Alban",
      "text": "Nam fermentum nisi at ipsum commodo finibus sit amet ut risus."
    },
    {
      "time": "15:50:56",
      "author": "Alban",
      "text": "Aliquam vitae magna quis ante tincidunt consequat."
    },
    {
      "time": "15:51:12",
      "author": "Sebastien",
      "text": "Donec in risus eget lectus blandit condimentum."
    },
    {
      "time": "15:51:16",
      "author": "Alban",
      "text": "Duis posuere neque ut lectus viverra ullamcorper et ut orci."
    },
    {
      "time": "15:52:18",
      "author": "Ulises",
      "text": "Pellentesque nec sapien eget leo accumsan fringilla. Donec at ante quis purus mollis commodo sit amet non est."
    }
  ];

}
