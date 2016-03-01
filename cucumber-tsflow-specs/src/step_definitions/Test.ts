"use strict";

import { binding, given } from "cucumber-tsflow";

@binding()
class TestSteps {
    @given(/^foo$/)
    public GivenFoo(): void {
        console.log("Given fooaaa 111");
    }
}

export = TestSteps;
