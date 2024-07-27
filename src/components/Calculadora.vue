<template>
  <div class="container">
    <div class="calculadora">

      <div class="inputContainer">
        <div class="labelContainer">
          <label>{{stringOperation}}</label>
        </div>
        <pv-inputText v-model="currentValue"  placeholder="0" class="inputNumber"></pv-inputText>
      </div>
      <div class="grid-container">
        <pv-button class="one" label="1" @click="appendDigit('1')"></pv-button>
        <pv-button class="two" label="2" @click="appendDigit('2')"></pv-button>
        <pv-button class="three" label="3" @click="appendDigit('3')"></pv-button>
        <pv-button class="four" label="4" @click="appendDigit('4')"></pv-button>
        <pv-button class="five" label="5" @click="appendDigit('5')"></pv-button>
        <pv-button class="six" label="6" @click="appendDigit('6')"></pv-button>
        <pv-button class="seven" label="7" @click="appendDigit('7')" ></pv-button>
        <pv-button class="eight" label="8" @click="appendDigit('8')"></pv-button>
        <pv-button class="nine" label="9" @click="appendDigit('9')"></pv-button>
        <pv-button class="zero" label="0" @click="appendDigit('0')" ></pv-button>
        <pv-button class="point" label="." @click="appendDigit('.')"></pv-button>
        <pv-button class="CE" label="CE" @click="clearAll()"></pv-button>
        <pv-button class="C" label="C" @click="clearEntry()"></pv-button>
        <pv-button class="moreLess" label="+/-" @click="setSign()"></pv-button>
        <pv-button class="divide" label="/" @click="setOperation('/')"></pv-button>
        <pv-button class="multiply" label="x" @click="setOperation('*')"></pv-button>
        <pv-button class="substract" label="-" @click="setOperation('-')"></pv-button>
        <pv-button class="add" label="+" @click="setOperation('+')"></pv-button>
        <pv-button class="equal" label="=" @click="calculateResult()"></pv-button>
        <pv-button class="root" label="raiz" @click="calculateSqrt()"></pv-button>
        <pv-button class="square" label="cuadrado" @click="calculatePow()"></pv-button>
        <pv-button class="oneXSachet" label="1/x" @click="calculateReverse()"></pv-button>
        <pv-button class="delete" label="eliminate" @click="eliminate()"></pv-button>
        <pv-button class="percentage" label="%" @click="percentage()"></pv-button>


      </div>
    </div>

  </div>
</template>
<script >
import app from "@/App.vue";
import {
  atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
} from 'mathjs'

export default{
  name:"calculator",
  data(){
    return{
      stringOperation:'',
      currentValue:'',
      operation:null,
      isNewValue:false,
      operations:['x','/','+','-'],
      answers:[]
    };
  },
  methods: {
    appendDigit(digit) {
      if(this.currentValue.length<=0 && (digit==='0' || digit==='.')){return;}
      if(this.currentValue.includes('.') && digit==='.'){return;}
      this.currentValue = this.currentValue + digit;
    },
    setOperation(operation) {
      console.log(operation);
      console.log(this.currentValue);
      console.log(this.stringOperation)
      if(this.operations.includes(this.stringOperation.slice(-1)) && !this.currentValue){
        this.stringOperation = this.stringOperation.slice(0,-1);
        this.stringOperation = this.stringOperation.concat(operation)
        return
      }
      if(this.currentValue && this.stringOperation){
        let result=evaluate(this.stringOperation.concat(this.currentValue));
        console.log(this.stringOperation.slice(0,-1).concat(operation).concat(this.currentValue))
        console.log(result)
        this.stringOperation=`${result}${operation}`;
        this.currentValue=''
        return
      }
      this.operation = operation;
      this.stringOperation=this.stringOperation.concat(this.currentValue).concat(this.operation);
      this.currentValue = '';
    },
    calculateResult(){
      this.stringOperation=evaluate(this.stringOperation.concat(this.currentValue)).toString();
      this.currentValue=''
    },
    clearAll(){
      this.stringOperation='';
      this.currentValue='';
    },
    clearEntry(){this.currentValue=''},
    setSign(){
      if(this.currentValue.length>0){
        this.currentValue=parseFloat(this.currentValue*-1).toString();
      }

    },
    calculatePow(){this.currentValue=pow(this.currentValue,2).toString();},
    calculateSqrt(){this.currentValue=sqrt(parseFloat(this.currentValue)).toString();},
    calculateReverse(){this.currentValue=(1/parseFloat(this.currentValue)).toString();},
    eliminate(){
      this.currentValue=this.currentValue.slice(0,-1);
    },
    percentage(){

    }


  }
}

</script>

<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
}
.inputContainer{
  width: 500px;
}
label{
  
}
.calculadora{
  display: flex;
  flex-direction: column;

  align-items: center;
  height: 500px;
  width: 500px;
  outline: 2px solid gray;

}
.calculadora .labelContainer{

}
.grid-container {
  display: grid;
  width:500px;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: repeat(6,1fr);
  column-gap: 2px;
  row-gap: 2px;

}
@media (max-width: 500px) {
  .grid-container {
    width: 100%;
  }
}
.percentage{
  grid-column:1;
  grid-row: 1;
}
.CE{
  grid-column:2;
  grid-row: 1;
}
.C{
  grid-column:3;
  grid-row: 1;
}
.delete{
  grid-column:4;
  grid-row: 1;
}
.oneXSachet{
  grid-column:1;
  grid-row: 2;
}
.square{
  grid-column:2;
  grid-row: 2;
}
.root{
  grid-column:3;
  grid-row: 2;
}
.divide{
  grid-column:4;
  grid-row: 2;
}
.seven{
  grid-column:1;
  grid-row: 3;
}
.eight{
  grid-column:2;
  grid-row: 3;
}
.nine{
  grid-column:3;
  grid-row: 3;
}
.multiply{
  grid-column:4;
  grid-row: 3;
}
.four{
  grid-column:1;
  grid-row: 4;
}
.five{
  grid-column:2;
  grid-row: 4;
}
.six{
  grid-column:3;
  grid-row: 4;
}
.substract{
  grid-column:4;
  grid-row: 4;
}
.zero{
  grid-column:2;
  grid-row: 6;
}
.point{
  grid-column:3;
  grid-row: 6;
}
.add{
  grid-column:4;
  grid-row: 5;
}
.inputNumber{
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
}
</style>