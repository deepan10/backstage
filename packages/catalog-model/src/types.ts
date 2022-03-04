/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * All parts of a complete entity ref, forming a full kind-namespace-name
 * triplet.
 *
 * @public
 */
export type CompoundEntityRef = {
  kind: string;
  namespace: string;
  name: string;
};

/**
 * A complete entity name, with the full kind-namespace-name triplet.
 *
 * @deprecated Use CompoundEntityRef instead
 * @public
 */
export type EntityName = CompoundEntityRef;
