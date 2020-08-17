/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * External dependencies
 */
import styled from 'styled-components';
import PropTypes from 'prop-types';
/**
 * Internal dependencies
 */
import { useCallback, useRef } from 'react';
import { useKeyDownEffect } from '../../../../keyboard';
import { useConfig } from '../../../../../app/config';

const Tab = styled.span`
  cursor: pointer;
  font-size: 16px;
  margin-right: 16px;
  border-bottom: ${({ theme, active }) =>
    active ? `solid 4px ${theme.colors.accent.primary};` : 'none'};
  &:last-child: {
    margin-right: 0;
  }
`;

function ProviderTab({
  id,
  index,
  name,
  providerType,
  active,
  setSelectedProvider,
}) {
  const { isRTL } = useConfig();
  const ref = useRef();

  const onKeyDown = useCallback(
    ({ key }) => {
      if (!ref.current) {
        return;
      }
      ref.current.tabIndex = -1;
      const siblingSelector =
        (key === 'ArrowRight' && !isRTL) || (key === 'ArrowLeft' && isRTL)
          ? 'nextSibling'
          : 'previousSibling';
      const sibling = ref.current[siblingSelector];
      if (sibling) {
        sibling.tabIndex = 0;
        sibling.focus();
        const newProvider = sibling.dataset.providerType;
        setSelectedProvider({ provider: newProvider });
      }
    },
    [ref, isRTL, setSelectedProvider]
  );

  useKeyDownEffect(
    ref,
    {
      key: ['left', 'right'],
    },
    onKeyDown,
    [ref, onKeyDown]
  );

  return (
    <Tab
      ref={ref}
      tabIndex={index == 0 ? 0 : -1}
      onClick={() => setSelectedProvider({ provider: providerType })}
      data-provider-type={providerType}
      active={active}
      id={id}
    >
      {name}
    </Tab>
  );
}

ProviderTab.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  providerType: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  setSelectedProvider: PropTypes.func.isRequired,
};

export default ProviderTab;
