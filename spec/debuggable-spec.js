var _ = require('lodash');

describe("Debuggable", function(){
    var Debuggable = require('../');

    it("has static debug level values", function(){

        expect(Debuggable.PROD).not.toBeUndefined();
        expect(Debuggable.LOW).not.toBeUndefined();
        expect(Debuggable.MED).not.toBeUndefined();
        expect(Debuggable.HIGH).not.toBeUndefined();
        expect(Debuggable.TMI).not.toBeUndefined();
        expect(Debuggable.WAY_TMI).not.toBeUndefined();
    });

    describe("dump()", function(){
        var SomeClass = function(){
            this.member = "hello world"
        }
        
        SomeClass.prototype = Debuggable.prototype;

        it("returns a string", function(){
            var obj = new SomeClass();
            expect(_.isString(obj.dump())).toBe(true, "a string should be returned");
        });
    });
});
