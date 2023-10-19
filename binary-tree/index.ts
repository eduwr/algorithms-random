class Traverser {
  static inorderTraversal(tree: TreeNode): number[] {
    const result: number[] = [];
    if (!!tree.left) {
      result.push(...this.inorderTraversal(tree.left));
    }

    result.push(tree.value);

    if (tree.right !== null) {
      result.push(...this.inorderTraversal(tree.right));
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

  console.log("Inorder Traversal: ", Traverser.inorderTraversal(root));
}

main();
