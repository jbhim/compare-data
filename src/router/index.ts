const { defineComponent, onMounted, ref } = Vue
const { createRouter, createWebHistory } = VueRouter
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: defineComponent({
                name: 'home',
                template: '<h1>home</h1>'
            })
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: defineComponent({
                name: 'about',
                style:'',
                template: `
                    <rc-page :class="specialExpression[7]" :id="'rc-2058752392372330'" :name="'LoginHome'"
                             @ready="runAction('initjs')">
                    <rc-container :class="['w100p', specialExpression[5]]"
                                  :visibility="true" style="min-height:100%; background:	#6495ED;"
                                  :id="'rc-2058752390930535'" :name="'container5'">
                        <rc-container :class="['w100p', specialExpression[5]]"
                                      :visibility="true"
                                      style="width: 424px; height: 390px; margin: 0 auto; display: flex; flex-direction: column; background: #fff; margin-top:150px; box-shadow: 0 0 4px 1px rgb(237 244 249 / 60%); border-radius: 5px;"
                                      :id="'rc-2058752389685348'" :name="'container1'">
                            <rc-container :class="['w100p', specialExpression[2]]"
                                          :visibility="true" :id="'rc-2058752375988297'"
                                          :name="'container6'">
                                <rc-text :class="specialExpression[1]" :id="'rc-2058752375201863'" :name="'text4'"
                                         :textValue="\`会议系统\`"
                                         :textStyleProp="{'maxTextSize':'不限制','highLight':'','highLightBgc':'','highLightColor':''}"></rc-text>
                            </rc-container>
                            <rc-container :class="['w100p', specialExpression[5]]"
                                          :visibility="true"
                                          style="margin-left:2.5%; width:95%; margin-top:40px;"
                                          :id="'rc-2058752379134033'"
                                          :name="'container2'">
                                <rc-text :class="specialExpression[3]" :id="'rc-2058752377167948'" :name="'text1'"
                                         :textValue="\`用户名：\`"
                                         :textStyleProp="{'maxTextSize':'不限制','highLight':'','highLightBgc':'','highLightColor':''}"></rc-text>
                                <rc-input v-model="username"
                                          :class="['w100p h1', specialExpression[4]]"
                                          :enabled="true" :id="'rc-2058752377954382'" :name="'input1'"
                                          inputType="text"
                                          :numberPrecision="{'decimalMode':'Fixed','decimalPrecision':2,'groupDigits':'No'}"
                                          :validateMessage="'用户名错误'"></rc-input>
                            </rc-container>
                            <rc-container :class="['w100p', specialExpression[5]]"
                                          :visibility="true" style="margin-left:2.5%; width:95%;"
                                          :id="'rc-2058752384311385'" :name="'container3'">
                                <rc-text :class="specialExpression[3]" :id="'rc-2058752380313684'" :name="'text2'"
                                         :textValue="\`密码：\`"
                                         :textStyleProp="{'maxTextSize':'不限制','highLight':'','highLightBgc':'','highLightColor':''}"></rc-text>
                                <rc-input v-model="password"
                                          :class="['w100p h1', specialExpression[4]]"
                                          :enabled="true" :id="'rc-2058752381100118'" :name="'input2'"
                                          inputType="password"
                                          :numberPrecision="{'decimalMode':'Fixed','decimalPrecision':2,'groupDigits':'No'}"
                                          :validateMessage="'密码错误'"></rc-input>
                            </rc-container>
                            <rc-container :class="['w100p', specialExpression[2]]"
                                          :visibility="true"
                                          style="margin-top:30px; margin-left:2.5%; width:95%;"
                                          :id="'rc-2058752388505697'"
                                          :name="'container4'">
                                <rc-button :class="['w100p h1', specialExpression[6]]" :enabled="true"
                                           :visibility="true" style="height: 36px;"
                                           :id="'rc-2058752386277470'" :name="'button1'" @click="runAction('login')">
                                    <rc-text :class="specialExpression[3]" style="font-size: 16px; color: white; "
                                             :id="'rc-2058752385491036'" :name="'text3'" :textValue="\`登录\`"
                                             :textStyleProp="{'maxTextSize':'不限制','highLight':'','highLightBgc':'','highLightColor':''}"></rc-text>
                                </rc-button>
                            </rc-container>
                        </rc-container>
                    </rc-container>
                    </rc-page>`,
                setup () {
                    const username = ref('')
                    const password = ref('')

                    const specialExpression: Record<number, string> = {
                        '1': 'rc-text logoywTitle',
                        '2': 'rc-container center',
                        '3': 'rc-text',
                        '4': 'rc-input',
                        '5': 'rc-container',
                        '6': 'rc-button',
                        '7': 'rc-page'
                    }
                    onMounted(() => {
                    })

                    const runAction = (actionName: string) => {
                        console.log(actionName)
                        console.log(username.value)
                        console.log(password.value)
                    }

                    return {
                        specialExpression,
                        username,
                        password,
                        runAction
                    }
                }
            })
        }
    ]
})

export default router
