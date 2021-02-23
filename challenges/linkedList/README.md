# Singly Linked List
<!-- Short summary or background information -->
Creating methods for singly linked lists

## Challenge
<!-- Description of the challenge -->
- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

- Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.

  - Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.

  - Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.

  - Define a method called toString (or __str__ in Python) which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:

    - `"{ a } -> { b } -> { c } -> NULL"`

- Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.

- Be sure to follow your language/frameworks standard naming conventions (e.g. C# uses PascalCasing for all method and class names).

- `.append(value)` which adds a new node with the given value to the end of the list

- `.insertBefore(value, newVal)` which add a new node with the given newValue immediately before the first value node

- `.insertAfter(value, newVal)` which add a new node with the given newValue immediately after the first value node

- `.kthFromEnd(k)` Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- `insert` Space: O(1), Time: O(1)

- `includes` Space: O(n), Time: O(n)

- `toString` Space: O(n), Time: O(n)

- `append` Space: O(n), Time: O(n)

- `insertBefore` Space: O(1), Time: O(1)

- `insertAfter` Space: O(1), Time: O(1)

- `kthFromEnd` Space: O(1), Time: O(1)

## Collaborators

- Carly Dekock

- Jason Dormier

- Nick Magruder

- Seid

## Resources

- [Link to Codefellows Docs](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-05/resources/singly_linked_list.html)

- [Link to Resource](https://stackoverflow.com/questions/2598348/how-to-find-nth-element-from-the-end-of-a-singly-linked-list)
