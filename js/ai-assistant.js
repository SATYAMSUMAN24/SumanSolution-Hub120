
// AI Assistant Chatbot
class AIAssistant {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.init();
    }

    init() {
        this.createChatWidget();
        this.bindEvents();
        this.addWelcomeMessage();
    }

    createChatWidget() {
        const chatHTML = `
            <div id="ai-chat-widget" class="ai-chat-widget">
                <div id="chat-toggle" class="chat-toggle pulse-effect">
                    <i class="fas fa-robot"></i>
                    <span class="chat-badge">AI</span>
                    <div class="chat-notification">💬</div>
                </div>
                <div id="chat-container" class="chat-container">
                    <div class="chat-header">
                        <div class="d-flex align-items-center">
                            <div class="chat-avatar bg-primary rounded-circle me-2 d-flex align-items-center justify-content-center" style="width: 35px; height: 35px;">
                                <i class="fas fa-robot text-white"></i>
                            </div>
                            <div>
                                <h6 class="mb-0">Suman AI Assistant</h6>
                                <small class="text-success">● Online</small>
                            </div>
                        </div>
                        <button id="chat-close" class="chat-close btn btn-sm">&times;</button>
                    </div>
                    <div id="chat-messages" class="chat-messages"></div>
                    <div class="chat-input-container">
                        <input type="text" id="chat-input" placeholder="Ask me about our services..." maxlength="500" class="form-control">
                        <button id="chat-send" class="btn btn-primary"><i class="fas fa-paper-plane"></i></button>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', chatHTML);
    }

    bindEvents() {
        document.getElementById('chat-toggle').addEventListener('click', () => this.toggleChat());
        document.getElementById('chat-close').addEventListener('click', () => this.closeChat());
        document.getElementById('chat-send').addEventListener('click', () => this.sendMessage());
        document.getElementById('chat-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        const container = document.getElementById('chat-container');
        container.style.display = this.isOpen ? 'flex' : 'none';
    }

    closeChat() {
        this.isOpen = false;
        document.getElementById('chat-container').style.display = 'none';
    }

    addWelcomeMessage() {
        const welcomeMsg = "Hello! I'm Kalolytic's AI Assistant. I can help you with information about our data analytics services, career opportunities, or answer any questions about our company. How can I assist you today?";
        this.addMessage(welcomeMsg, 'bot');
    }

    sendMessage() {
        const input = document.getElementById('chat-input');
        const message = input.value.trim();
        if (!message) return;

        this.addMessage(message, 'user');
        input.value = '';
        
        // Simulate AI response
        setTimeout(() => {
            const response = this.generateResponse(message);
            this.addMessage(response, 'bot');
        }, 1000);
    }

    addMessage(text, sender) {
        const messagesContainer = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}`;
        
        const avatar = sender === 'bot' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
        messageDiv.innerHTML = `
            <div class="message-avatar">${avatar}</div>
            <div class="message-content">${text}</div>
        `;
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    generateResponse(message) {
        const msg = message.toLowerCase();
        
        if (msg.includes('service') || msg.includes('what do you do')) {
            return "We specialize in Data Analytics, Business Intelligence, AI & Machine Learning solutions, and Data Engineering. We help businesses transform raw data into actionable insights for growth and innovation.";
        }
        else if (msg.includes('job') || msg.includes('career') || msg.includes('hiring')) {
            return "We're currently hiring! Check our Join Us page for open positions including Senior Data Engineer (₹7-11 LPA) and Junior Full Stack Developer (₹4-6 LPA). Visit our Join Us section for detailed job descriptions and application process.";
        }
        else if (msg.includes('contact') || msg.includes('phone') || msg.includes('email')) {
            return "You can reach us at:<br>📞 +91 8227027353<br>📧 satyamsuman2003@gmail.com<br>📍 Patna, Bihar, India<br>Or visit our Contact page for more details.";
        }
        else if (msg.includes('price') || msg.includes('cost') || msg.includes('pricing')) {
            return "Our pricing is transparent and tailored to your specific needs. Contact us for a free consultation and customized quote based on your project requirements.";
        }
        else if (msg.includes('data analytics') || msg.includes('analytics')) {
            return "Our Data Analytics services include Predictive Analytics, Statistical Analysis, Data Visualization, and Pattern Recognition. We help you uncover valuable insights from your data to drive business growth.";
        }
        else if (msg.includes('ai') || msg.includes('machine learning') || msg.includes('ml')) {
            return "We offer AI & Machine Learning solutions including Predictive Modeling, Process Automation, Recommendation Systems, and Custom AI algorithms to give you competitive advantages.";
        }
        else if (msg.includes('team') || msg.includes('about')) {
            return "Suman Solution is founded with a passion for data-driven excellence. Our expert team includes certified data scientists and analysts dedicated to transforming businesses through innovative data solutions.";
        }
        else if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
            return "Hello! Welcome to Suman Solution. I'm here to help you with any questions about our data analytics services, career opportunities, or general inquiries. What would you like to know?";
        }
        else if (msg.includes('thank') || msg.includes('thanks')) {
            return "You're welcome! If you have any more questions about our services or need assistance, feel free to ask. We're here to help!";
        }
        else {
            return "Thank you for your question! For detailed information about our services, please visit our Services page or contact our team directly. Is there anything specific about our data analytics solutions I can help you with?";
        }
    }
}

// Initialize AI Assistant when page loads
document.addEventListener('DOMContentLoaded', function() {
    new AIAssistant();
});
