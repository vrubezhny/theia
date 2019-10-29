/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/

import { injectable } from 'inversify';
import { Endpoint } from '@theia/core/lib/browser/endpoint';

@injectable()
export class WebviewEnvironment {

    // TODO make pattern configurable via ENV variable
    readonly externalEndpointUrl = new Endpoint({
        // host: '{{uuid}}.webview.' + (window.location.host || 'localhost')
        path: 'webview'
    }).getRestUrl();

    readonly externalEndpoint = this.externalEndpointUrl.toString(true);

    readonly resourceRoot = this.externalEndpointUrl.resolve('theia-resource/{{resource}}').toString(true);

    readonly cspSource = this.externalEndpoint.replace('{{uuid}}', '*');

}
