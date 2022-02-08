class Module{
    constructor(_name){
        this.name = _name;
    }
    print_name(){
        console.log(this.name);
    }
}

module.exports = Module;