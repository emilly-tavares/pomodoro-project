//Código do cronômetro Pomodoro

let segundosPomodoro = 0;
let minutosPomodoro = 0;

let interval;



const startTimer = () => {
    
  if(minutosPomodoro === 25){
    segundosPomodoro = 0;
    minutosPomodoro = 0;
  }

  if (interval) {
    return;
  }
 
    interval = setInterval(() => {
      segundosPomodoro++;
      console.log(segundosPomodoro);
  
      if(segundosPomodoro === 60){
          minutosPomodoro++;
          
          resetSegundos();
      }
  
      if(minutosPomodoro === 25){
          stopTimer();
      }
  
    }, 1000);
  

    
};

const stopTimer = () => {
  clearInterval(interval);
  interval = undefined;
};

const resetSegundos = () =>{
    segundosPomodoro = 0;
};


const resetTimer = () => {
  stopTimer();
  segundosPomodoro = 0;
  minutosPomodoro = 0;

 
};



//Código do cronômetro Intervalo

let segundos_ = 0;
let minutos_ = 0;

let interval_;



const startTimer_ = () => {
  
  if(interval_){
    return;
  }

  if(minutos_ == 5){
    segundos_ = 0;
    minutos_ = 0;
  }

    interval_ = setInterval(() => {
    segundos_++;
    console.log(segundos_);

    if(segundos_ === 60){
        minutos_++;
        
        resetSegundos_();
    }

    if(minutos_ === 5){
        stopTimer_();
    }

  }, 1000);
};

const stopTimer_ = () => {
  clearInterval(interval_);
  interval_ = undefined;
};



const resetSegundos_ = () =>{
    segundos_ = 0;
};


const resetTimer_ = () => {
  stopTimer_();
  segundos_ = 0;
  minutos_ = 0;
 
};


