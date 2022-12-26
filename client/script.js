


const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat-container');

let loadInterval;

function loader(element) {
  element.textContent = '';

  loadInterval = setInterval(() => {
    element.textContent += '.';

    if (element.textContent.length === '....') {
      element.textContent = '';
    }
  }, 300)
}

function typeText(element, text) {
  let index = 0;

  let interval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20)
}

function generateUniqueID() {
  const timestamp = Date.now();
  return Math.floor(Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return 'id-${timestamp}-${hexadecimalString}';
}

function chatStripe (isAI, value, UniqueId) 
{
  return (
    `
    <div class = "wrapper ${isAI && 'ai'}">
      <div class = "chat">
        <div className = "profile">
          <img 
            src = "${isAI ? bot : user}" 
            alt = "${isAI ? bot : user}" 
          />
        </div>
        <div className = "message" id=${UniqueId}>${value}></div>
      </div>
    </div>
    `
  )
}


const handleSubmit = async (e) => {
  e.preventDefault();

  constData = new FormData(form);

  //user's chatstripe
  chatContainer.innerHTML += chatStripe(false, data.get('prompt'));

  form.reset();

  //bot's chatstripe
  const UniqueId = generateUniqueID();
  chatContainer.innerHTML += chatStripe(true, " ", UniqueId);

  chatContainer.scrollTop = chatContainer.scrollHeight;

  const messageDiv = document.getElementById(UniqueId);

  loader(messageDiv);
}

form.addEventListener('submit', handleSubmit);
form.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    handleSubmit(e);
  }
});