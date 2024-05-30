import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewChecked,
} from '@angular/core';

interface Message {
  text?: string;
  type: 'sent' | 'received';
  imageUrl?: string;
  videoUrl?: string;
  fileUrl?: string;
  fileName?: string;
}

@Component({
  selector: 'app-chat-simulator',
  templateUrl: './chat-simulator.component.html',
  styleUrls: ['./chat-simulator.component.scss'],
})
export class ChatSimulatorComponent implements AfterViewChecked {
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  contactName: string = 'Soul Plus';
  newMessage: string = '';
  messages: Message[] = [
    { imageUrl: 'assets/whatsapp-imagem2.png', type: 'received' },
    {
      text: `*Maio* tá acabando, e com ele também o nosso estoque de *Sacolas Ecológicas*.\n\nPor isso ⬇️ baixamos o preço pra *ZERAR O ESTOQUE* 0️⃣.\n\nEntão clica no link aí embaixo e garanta o seu antes que acabe 👇🏼\n\nhttp://soulplus.digital\n\nVocê tem interesse em conhecer *AGORA?*`,
      type: 'received',
    },
    { text: '1', type: 'sent' },
    { text: 'Legal que você demonstrou interesse 😃', type: 'received' },
    { text: 'Lorem ipsum dolor sit amet', type: 'sent' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', type: 'received' },
    { videoUrl: 'assets/sample-video.mp4', type: 'received' },
    { fileUrl: 'assets/sample-file.pdf', fileName: 'sample-file.pdf', type: 'received' }
  ];

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ text: this.newMessage, type: 'sent' });
      this.newMessage = '';
      this.scrollToBottom();
    }
  }

  formatMessage(text: string): string {
    let formattedText = text.replace(/\*(.*?)\*/g, '<strong>$1</strong>');
    formattedText = formattedText.replace(/\n/g, '<br>');
    return formattedText;
  }

  private scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop =
        this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }
}
