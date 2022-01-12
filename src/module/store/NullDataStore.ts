/*
 * Copyright 2022 Andrew Cuccinello
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *
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

import { AbstractDataStore, DataStoreValidKey, DataStoreValidValue } from './AbstractDataStore';

/**
 * A data store which does nothing, for if you don't wish to store data.
 */
export class NullDataStore extends AbstractDataStore {
    public constructor() {
        super();
    }

    public get keys(): DataStoreValidKey[] {
        return [];
    }

    public get values(): DataStoreValidValue[] {
        return [];
    }

    public getValue<TValue>(key: DataStoreValidKey): TValue | undefined {
        console.warn(`NullDataStore::Get ${key}`);
        return undefined;
    }

    public async setValue<TValue>(key: DataStoreValidKey, value: TValue): Promise<boolean> {
        console.warn(`NullDataStore::Set ${key} -> ${value}`);
        return true;
    }

    public getAll(): Record<DataStoreValidKey, DataStoreValidValue> {
        console.warn(`NullDataStore::GetAll`);
        return {};
    }

    public async setAll(data: Record<DataStoreValidKey, DataStoreValidValue>): Promise<boolean> {
        console.warn(`NullDataStore::SetAll`);
        console.warn(data);
        return true;
    }
}