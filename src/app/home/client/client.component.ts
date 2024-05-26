import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent {
  clients = [
    {
      name: 'Mathew Dix',
      position: 'Graphic Design',
      image: {
        src: 'assets/images/clients/1.jpg',
        alt: 'Image 1',
      },
      desc: 'The service provided was exceptional. The team surpassed expectations, demonstrating professionalism, clear communication, and outstanding quality. Highly recommend their expertise for any project',
    },
    {
      name: 'Nick Karvounis',
      position: 'Graphic Design',
      image: {
        src: 'assets/images/clients/2.jpg',
        alt: 'Image 2',
      },
      desc: 'Outstanding teamwork! They delivered exceptional results promptly. Their attention to detail and communication throughout the process were remarkable. Will definitely collaborate again',
    },

    {
      name: 'Jaelynn castillo',
      position: 'Graphic Design',

      image: {
        src: 'assets/images/clients/3.jpg',
        alt: 'Image 3',
      },
      desc: 'Their creativity and professionalism impressed us greatly. The final product exceeded our expectations. Their dedication and attention to detail were evident throughout the project',
    },
    {
      name: 'Mike Petrucci',
      position: 'Graphic Design',

      image: {
        src: 'assets/images/clients/4.jpg',
        alt: 'Image 4',
      },
      desc: 'Highly satisfied with their service. Communication was excellent, and the quality of work was exceptional. Would definitely choose them again for future projects. Will definitely collaborate again',
    },
  ];
}
