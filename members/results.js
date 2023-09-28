export function constructResult(resultData) {
  const resultObject = {
    memberId: resultData.memberId,
    date: new Date(resultData.date),
    resultType: resultData.resultType,
    resultDiscipline: resultData.discipline,
    time: resultData.time,
    set memberName(MemberObject){
        this.memberId = MemberObject.name;
    },
    get memberName(){
        return this.memberId;
    },
    get ResultType(){
        if (this.resultType === "competition") {
            return true;
        }
        return false;
    },
   get time(){
    return this._time;
   },
   set time(time){
       this._time = time;
   },
    
  };
  return resultObject;
}
