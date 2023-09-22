import styled from 'styled-components'
import { Tree, TreeNode } from 'react-organizational-chart';


const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid red;
`;


const Try = ()=>{
return(
    <div>
        <Tree
    lineWidth={'2px'}
    lineColor={'green'}
    lineBorderRadius={'10px'}
    label={<div className='d-flex justify-content-center'>
        <div>
            <div className='bg-info'>Image</div>
        </div>
        <div className='d-flex flex-column'>
        <h1>Yashwanth</h1>
        <p>Doctor</p>
        </div>
    </div>}
  >
    <TreeNode label={<StyledNode>Child 1</StyledNode>}>
      <TreeNode label={<StyledNode>Grand Child</StyledNode>} />
    </TreeNode>
    <TreeNode label={<StyledNode>Child 2</StyledNode>}>
      <TreeNode label={<StyledNode>Grand Child</StyledNode>}>
        <TreeNode label={<StyledNode>Great Grand Child 1</StyledNode>} />
        <TreeNode label={<StyledNode>Great Grand Child 2</StyledNode>} />
      </TreeNode>
    </TreeNode>
    <TreeNode label={<StyledNode>Child 3</StyledNode>}>
      <TreeNode label={<StyledNode>Grand Child 1</StyledNode>} />
      <TreeNode label={<StyledNode>Grand Child 2</StyledNode>} />
    </TreeNode>
  </Tree>

    </div>

);
}
export default Try