
import styled from "styled-components";

export const ReactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  font-size: 20px;
  padding: 5px;
  color: var(--color-${({ $color }) => $color});
`

export const ReactionIcon = styled.img`
  width: 80px;
`