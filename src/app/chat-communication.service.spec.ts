import { TestBed, inject } from '@angular/core/testing';

import { ChatCommunicationService } from './chat-communication.service';

describe('ChatCommunicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatCommunicationService]
    });
  });

  it('should ...', inject([ChatCommunicationService], (service: ChatCommunicationService) => {
    expect(service).toBeTruthy();
  }));
});
