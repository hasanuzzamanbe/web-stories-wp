/*
 * Copyright 2021 Google LLC
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
 * Ascertain if a resource can be transcoded in it's current state.
 *
 * @param {import('@googleforcreators/media').Resource} resource The resource.
 * @return {boolean} If the current resource can be transcoded.
 */
function canTranscodeResource(resource) {
  const { isTranscoding, isMuting, isTrimming, isExternal, local } =
    resource || {};
  return !local && !isExternal && !isTranscoding && !isTrimming && !isMuting;
}
export default canTranscodeResource;
