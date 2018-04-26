class Pokemon { 
    constructor(name, type, hp, def, atk, legend) {
        if (typeof(name) !== "string")
            throw new TypeError('Invalid name');
        else if (typeof(type) !== "string")
            throw new TypeError('Invalid type');
        else if (typeof(hp) !== "number")
            throw new TypeError('Invalid hp');
        else if (typeof(def) !== "number")
            throw new TypeError('Invalid def');
        else if (typeof(atk) !== "number" )
            throw new TypeError('Invalid atk');
        else if (typeof(legend) !== "boolean")
            throw new TypeError('Invalid legend');
        else {
            this.name = name;
            this.type = type;
            this.hp = hp;
            this.def = def;
            this.atk = atk;
            this.legend = legend;
            
            Pokemon.all.push(this);
        }
    }
    
    attack(target) {
        if (target instanceof Pokemon) {
            if ( (this.atk - target.def) > 0 )
                target.hp = target.hp - (this.atk - target.def);
        }
        else
            throw new TypeError('Target is not a pokemon');
    }

    aliveCheck() {
        if (this.hp > 0)
            return true;
        else
            return false;
    } 
}

Pokemon.all = [];
