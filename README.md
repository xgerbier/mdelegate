


Lightweight multicast delegate for typescript.

### Introduction
Simple usage with signature checking when adding/removing a callback :

    const d = new Delegate<(a : string) => void>();
    d.add((a : string) =>
    {
        console.log("1: " + a);
    });
    d.add((a : string) =>
    {
        console.log("2: " + a);
    });
    d.invoke("Hello world");

Expected result :

    1: Hello world
    2: Hello world

It is also possible to enforce the type checking of the arguments when invoking the delegate, syntax similar to Unreal Engine delegates (`Delegate{n}Params`) :

    const d = new DelegateTwoParams<string, string>();
    d.add((a : string, b : string) =>
    {
        console.log(`1: ${a} ${b}`);
    });
    d.add((a : string, b : string) =>
    {
        console.log(`2: ${a} ${b}`);
    });
    d.invoke("Hello", "world");

Expected result :

    1: Hello world
    2: Hello world

### API

 - `Delegate.add()`

Add a callback to be invoked. The callbacks are called in the order they are added.

 - `Delegate.remove()`

 Remove a callback.

 - `Delegate.invoke()`

Execute all the callbacks added to the delegate. If the callbacks should return a value, only the result of the last callback is returned by `invoke()`.

 - `IDelegate`

Interface to expose only the `add()` and `remove()` methods. Useful, for example, to create a getter for a delegate.
Example :

    type BoolChanged = (classA : ClassA, value : boolean) => void;

    class ClassA
    {
        protected dlgtBoolChanged = new Delegate<BoolChanged>();

        // getter expose only add()/remove()
        public get onBoolChanged() : IDelegate<BoolChanged>
        {
            return this.dlgtBoolChanged;
        }

        public setBool(value : boolean) : void
        {
            // ...
            this.dlgtBoolChanged.invoke(this, value);
        }
    }

    const a = new ClassA();
    const f = (classA : ClassA, value : boolean) =>
    {
        console.log(classA, value);
    };
    a.onBoolChanged.add(f);
    a.setBool(true);

- `Delegate{n}Params / IDelegate{n}Params`

Explicit definition of `invoke()` with template parameters and enforce type checking. Use `DelegateNoParam`, `DelegateOneParam`, `DelegateTwoParams`, etc with template type parameters and an optional result type.

Example :

    class ClassB
    {
        protected dlgtUpdate = new DelegateTwoParams<string, number>();

        // getter expose only add()/remove()
        public get onUpdate() : IDelegateTwoParams<string, number>
        {
            return this.dlgtUpdate;
        }

        public update() : void
        {
            // ...
            this.dlgtUpdate.invoke("update", 1);     // ts: type checking <string, number>
        }
    }

    const b = new ClassB();
    b.onUpdate.add((a : string, b : number) =>
    {
        console.log(a, b);
    });
    b.update();
