
Interface?
-----------

1.It is just like blueprint of any class's behaviour.

2.It is implemented by child class using keyword 'implements'.

There can be only abstract methods in the Java interface, not the method body.

Java Interface also represents the IS-A relationship.

3.By default all the non-static functions are pubic and abstract.

7.Variable in Interface is By-Default, Public, Static and Final.

4.We can achieve Multiple-Inheritance through Interface.

8.If a class implements an interface and does not provide method bodies for all functions specified in the interface, then the class must be declared abstract.

9.We can’t create an instance(interface can’t be instantiated) of the interface but we can make the reference of it that refers to the Object of its implementing class.


New Features Added in Interfaces in JDK 8:
-----------------------------------------
1. Prior to JDK 8, the interface could not define the implementation. We can now add default implementation for interface methods. This default implementation has a special use and does not affect the intention behind interfaces.
     See-P2_Interface
2. Another feature that was added in JDK 8 is that we can now define static methods in interfaces that can be called independently without an object. Note: these methods are not inherited.
     See-P1_Interface



Important Points:
------------------
Inside the Interface constructors are not allowed.
Inside the interface main method is not allowed.
Inside the interface static ,final,private methods declaration are not possible.
New Features Added in Interfaces in JDK 9
From Java 9 onwards, interfaces can contain the following also:

New Features Added in Interfaces in JDK 9
------------------------------------------
Static methods
Private methods
Private Static methods



Link:
------
https://www.geeksforgeeks.org/interfaces-in-java/