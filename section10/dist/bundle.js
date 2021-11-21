(()=>{"use strict";class e{constructor(){}get totalScore(){return n.getInstance().activeElementsScore.reduce(((e,t)=>e+t),0)}render(){document.querySelector(".score__number").textContent=String(this.totalScore)}static getInstance(){return e.instance||(e.instance=new e),e.instance}}class t{constructor(e){this.element=e,e.addEventListener("click",this.clickEventHandler.bind(this))}clickEventHandler(){this.element.classList.toggle("food--active"),e.getInstance().render()}}class n{constructor(){this.elements=document.querySelectorAll(".food"),this._activeElements=[],this._activeElementsScore=[],this.elements.forEach((e=>{new t(e)}))}get activeElements(){return this._activeElements=[],this.elements.forEach((e=>{e.classList.contains("food--active")&&this._activeElements.push(e)})),this._activeElements}get activeElementsScore(){return this._activeElementsScore=[],this.activeElements.forEach((e=>{const t=e.querySelector(".food__score");t&&this._activeElementsScore.push(Number(t.textContent))})),this._activeElementsScore}static getInstance(){return n.instance||(n.instance=new n),n.instance}}n.getInstance()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJtQkFDTyxNQUFNQSxFQUNUQyxlQUNJQyxpQkFFQSxPQURjQyxFQUFNQyxjQUNQQyxvQkFBb0JDLFFBQU8sQ0FBQ0MsRUFBT0MsSUFBVUQsRUFBUUMsR0FBTyxHQUU3RUMsU0FDSUMsU0FBU0MsY0FBYyxrQkFBa0JDLFlBQWNDLE9BQU9DLEtBQUtaLFlBRXZFYSxxQkFJSSxPQUhLZixFQUFNZ0IsV0FDUGhCLEVBQU1nQixTQUFXLElBQUloQixHQUVsQkEsRUFBTWdCLFVDYmQsTUFBTUMsRUFDVGhCLFlBQVlpQixHQUNSSixLQUFLSSxRQUFVQSxFQUNmQSxFQUFRQyxpQkFBaUIsUUFBU0wsS0FBS00sa0JBQWtCQyxLQUFLUCxPQUVsRU0sb0JBQ0lOLEtBQUtJLFFBQVFJLFVBQVVDLE9BQU8sZ0JBQ2hCdkIsRUFBTUksY0FDZEssVUNSUCxNQUFNTixFQUNURixjQUNJYSxLQUFLVSxTQUFXZCxTQUFTZSxpQkFBaUIsU0FDMUNYLEtBQUtZLGdCQUFrQixHQUN2QlosS0FBS2EscUJBQXVCLEdBQzVCYixLQUFLVSxTQUFTSSxTQUFTVixJQUNuQixJQUFJRCxFQUFLQyxNQUdiVyxxQkFPQSxPQU5BZixLQUFLWSxnQkFBa0IsR0FDdkJaLEtBQUtVLFNBQVNJLFNBQVNWLElBQ2ZBLEVBQVFJLFVBQVVRLFNBQVMsaUJBQzNCaEIsS0FBS1ksZ0JBQWdCSyxLQUFLYixNQUczQkosS0FBS1ksZ0JBRVpyQiwwQkFRQSxPQVBBUyxLQUFLYSxxQkFBdUIsR0FDNUJiLEtBQUtlLGVBQWVELFNBQVNWLElBQ3pCLE1BQU1jLEVBQVlkLEVBQVFQLGNBQWMsZ0JBQ3BDcUIsR0FDQWxCLEtBQUthLHFCQUFxQkksS0FBS0UsT0FBT0QsRUFBVXBCLGlCQUdqREUsS0FBS2EscUJBRWhCWixxQkFJSSxPQUhLWixFQUFNYSxXQUNQYixFQUFNYSxTQUFXLElBQUliLEdBRWxCQSxFQUFNYSxVQ2hDckJiLEVBQU1DLGUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZWN0aW9uMTAvLi9kaXN0L3Njb3JlLmpzIiwid2VicGFjazovL3NlY3Rpb24xMC8uL2Rpc3QvZm9vZC5qcyIsIndlYnBhY2s6Ly9zZWN0aW9uMTAvLi9kaXN0L2Zvb2RzLmpzIiwid2VicGFjazovL3NlY3Rpb24xMC8uL2Rpc3QvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb29kcyB9IGZyb20gXCIuL2Zvb2RzLmpzXCI7XG5leHBvcnQgY2xhc3MgU2NvcmUge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG4gICAgZ2V0IHRvdGFsU2NvcmUoKSB7XG4gICAgICAgIGNvbnN0IGZvb2RzID0gRm9vZHMuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgcmV0dXJuIGZvb2RzLmFjdGl2ZUVsZW1lbnRzU2NvcmUucmVkdWNlKCh0b3RhbCwgc2NvcmUpID0+IHRvdGFsICsgc2NvcmUsIDApO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZV9fbnVtYmVyJykudGV4dENvbnRlbnQgPSBTdHJpbmcodGhpcy50b3RhbFNjb3JlKTtcbiAgICB9XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIVNjb3JlLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBTY29yZS5pbnN0YW5jZSA9IG5ldyBTY29yZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTY29yZS5pbnN0YW5jZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTY29yZSB9IGZyb20gXCIuL3Njb3JlLmpzXCI7XG5leHBvcnQgY2xhc3MgRm9vZCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNsaWNrRXZlbnRIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBjbGlja0V2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJmb29kLS1hY3RpdmVcIik7XG4gICAgICAgIGNvbnN0IHNjb3JlID0gU2NvcmUuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgc2NvcmUucmVuZGVyKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRm9vZCB9IGZyb20gXCIuL2Zvb2QuanNcIjtcbmV4cG9ydCBjbGFzcyBGb29kcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvb2RcIik7XG4gICAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnRzU2NvcmUgPSBbXTtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBuZXcgRm9vZChlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBhY3RpdmVFbGVtZW50cygpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJmb29kLS1hY3RpdmVcIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hY3RpdmVFbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUVsZW1lbnRzO1xuICAgIH1cbiAgICBnZXQgYWN0aXZlRWxlbWVudHNTY29yZSgpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudHNTY29yZSA9IFtdO1xuICAgICAgICB0aGlzLmFjdGl2ZUVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvb2RTY29yZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb29kX19zY29yZVwiKTtcbiAgICAgICAgICAgIGlmIChmb29kU2NvcmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hY3RpdmVFbGVtZW50c1Njb3JlLnB1c2goTnVtYmVyKGZvb2RTY29yZS50ZXh0Q29udGVudCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUVsZW1lbnRzU2NvcmU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCFGb29kcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgRm9vZHMuaW5zdGFuY2UgPSBuZXcgRm9vZHMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRm9vZHMuaW5zdGFuY2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRm9vZHMgfSBmcm9tIFwiLi9mb29kcy5qc1wiO1xuRm9vZHMuZ2V0SW5zdGFuY2UoKTtcbiJdLCJuYW1lcyI6WyJTY29yZSIsImNvbnN0cnVjdG9yIiwidG90YWxTY29yZSIsIkZvb2RzIiwiZ2V0SW5zdGFuY2UiLCJhY3RpdmVFbGVtZW50c1Njb3JlIiwicmVkdWNlIiwidG90YWwiLCJzY29yZSIsInJlbmRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiU3RyaW5nIiwidGhpcyIsInN0YXRpYyIsImluc3RhbmNlIiwiRm9vZCIsImVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xpY2tFdmVudEhhbmRsZXIiLCJiaW5kIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2FjdGl2ZUVsZW1lbnRzIiwiX2FjdGl2ZUVsZW1lbnRzU2NvcmUiLCJmb3JFYWNoIiwiYWN0aXZlRWxlbWVudHMiLCJjb250YWlucyIsInB1c2giLCJmb29kU2NvcmUiLCJOdW1iZXIiXSwic291cmNlUm9vdCI6IiJ9