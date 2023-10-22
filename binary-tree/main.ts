class Traverser {
  /**
   * Perform an in-order traversal of a binary tree iteratively.
   *  In this traversal, you visit the left subtree, then the current node, and finally the right subtree, in that order.
   *
   * @param {TreeNode | null} tree - The root node of the binary tree.
   * @returns {number[]} - An array containing the elements of the binary tree in in-order traversal.
   */
  static inorderTraversalIteractive(tree: TreeNode | null): number[] {
    const result: number[] = [];
    const stack: TreeNode[] = [];
    let current: TreeNode | null | undefined = tree;

    while (current || stack.length > 0) {
      while (current?.left) {
        stack.push(current);
        current = current.left;
      }

      if (!current) throw new Error("Something went wrong");

      result.push(current.value);

      // maybe I could use current here
      current = stack.pop();

      if (current) {
        result.push(current.value);
        current = current.right;
      } else {
        break;
      }
    }

    //        1
    //       / \
    //      2   3
    //     /\   /\
    //    4  5 6  7
    //

    // result should be 4 2 5 1 6 3 7
    return result;
  }

  /**
   * Perform an in-order traversal of a binary tree recursively.
   *  In this traversal, you visit the left subtree, then the current node, and finally the right subtree, in that order.
   *
   * @param {TreeNode} tree - The root node of the binary tree.
   * @returns {number[]} - An array containing the elements of the binary tree in in-order traversal.
   */
  static inorderTraversalRecursive(tree: TreeNode): number[] {
    const result: number[] = [];
    if (!!tree.left) {
      result.push(...this.inorderTraversalRecursive(tree.left));
    }

    result.push(tree.value);

    if (tree.right !== null) {
      result.push(...this.inorderTraversalRecursive(tree.right));
    }

    return result;
  }

  /**
   * Perform a pre-order traversal of a binary tree iteratively.
   * In this traversal, you visit the current node first, followed by the left subtree, and then the right subtree.
   *
   * @param {TreeNode | null} tree - The root node of the binary tree.
   * @returns {number[]} - An array containing the elements of the binary tree in pre-order traversal.
   */
  static preorderTraversalInteractive(
    tree: TreeNode | null | undefined
  ): number[] {
    const result: number[] = [];
    const stack: TreeNode[] = [];
    let current = tree;

    while (current || stack.length > 0) {
      if (current) result.push(current.value);

      if (current?.right) {
        stack.push(current.right);
      }

      if (current?.left) {
        current = current.left;
      } else {
        current = stack.pop();
      }
    }

    return result;

    //        1
    //       / \
    //      2   3
    //     /\   /\
    //    4  5 6  7

    // Output: 1 2 4 5 3 6 7
  }

  /**
   * Perform a pre-order traversal of a binary tree recursively.
   * In this traversal, you visit the current node first, followed by the left subtree, and then the right subtree.
   *
   * @param {TreeNode | null} tree - The root node of the binary tree.
   * @returns {number[]} - An array containing the elements of the binary tree in pre-order traversal.
   */
  static preorderTraversalRecursive(
    tree: TreeNode | null | undefined
  ): number[] {
    const result: number[] = [];

    if (tree) {
      result.push(tree.value);
    }

    if (tree?.left) {
      result.push(...this.preorderTraversalRecursive(tree.left));
    }

    if (tree?.right) {
      result.push(...this.preorderTraversalRecursive(tree.right));
    }

    return result;

    //        1
    //       / \
    //      2   3
    //     /\   /\
    //    4  5 6  7

    // Output: 1 2 4 5 3 6 7
  }

  /**
   * Perform an interactive post-order traversal of a binary tree.
   * In this traversal, you visit the left subtree, the right subtree, and finally the current node.
   *
   * @param {TreeNode} tree - The root node of the binary tree.
   * @returns {number[]} - An array containing the elements of the binary tree in post-order traversal.
   */
  static postorderTraversalInteractive(tree: TreeNode): number[] {
    const result: number[] = [];
    const stack1: TreeNode[] = [];
    const stack2: TreeNode[] = [];

    if (tree) {
      stack1.push(tree);

      while (stack1.length > 0) {
        const node = stack1.pop();
        if (!node) break;

        stack2.push(node);

        if (node.left) {
          stack1.push(node.left);
        }

        if (node.right) {
          stack1.push(node.right);
        }
      }

      while (stack2.length > 0) {
        const node = stack2.pop();

        if (!node) break;

        result.push(node.value);
      }
    }

    return result;
    // Output: 4 5 2 6 7 3 1
    //        1
    //       / \
    //      2   3
    //     /\   /\
    //    4  5 6  7
    //
  }

  /**
   * Perform a recursive post-order traversal of a binary tree.
   * In this traversal, you visit the left subtree, the right subtree, and finally the current node.
   *
   * @param {TreeNode} tree - The root node of the binary tree.
   * @returns {number[]} - An array containing the elements of the binary tree in post-order traversal.
   */
  static postorderTraversalRecursive(tree: TreeNode): number[] {
    const result: number[] = [];

    if (tree.left) {
      result.push(...this.postorderTraversalRecursive(tree.left));
    }

    if (tree.right) {
      result.push(...this.postorderTraversalRecursive(tree.right));
    }
    result.push(tree.value);

    return result;
    // Output: 4 5 2 6 7 3 1
    //        1
    //       / \
    //      2   3
    //     /\   /\
    //    4  5 6  7
    //
  }
}

class TreeNode {
  value: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

function main() {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);

  //        1
  //       / \
  //      2   3
  //     /\   /\
  //    4  5 6  7
  //

  console.log("Inorder Traversal: ", Traverser.inorderTraversalRecursive(root));
  console.log(
    "Inorder Traversal Interactive: ",
    Traverser.inorderTraversalIteractive(root)
  );

  console.log(
    "Preorder Traversal: ",
    Traverser.preorderTraversalInteractive(root)
  ); // Output: 1 2 4 5 3 6 7
  console.log(
    "Preorder Traversal Recursive: ",
    Traverser.preorderTraversalRecursive(root)
  ); // Output: 1 2 4 5 3 6 7
  console.log(
    "Postorder Traversal Recursive: ",
    Traverser.postorderTraversalRecursive(root)
  ); // Output: 4 5 2 6 7 3 1

  console.log(
    "Postorder Traversal Interactive: ",
    Traverser.postorderTraversalInteractive(root)
  ); // Output: 4 5 2 6 7 3 1
}

main();
