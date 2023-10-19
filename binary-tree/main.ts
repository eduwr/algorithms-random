class Traverser {
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

  static preorderTraversal(tree: TreeNode) {
    const result: number[] = [];

    result.push(tree.value);

    return result;
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
}

main();
