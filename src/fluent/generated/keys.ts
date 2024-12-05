import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: 'ca8bea7fb1e74ba7aa012e5a9899b58a'
                    }
                    src_server_script_js: {
                        table: 'sys_module'
                        id: '2209d3b1e8724c59bed0e31d319bdecb'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '4a1090d3ebc24c348e39193b53d111af'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '0d2f281c8dca482abaf0ab39975ab92d'
                    }
                }
            }
        }
    }
}
