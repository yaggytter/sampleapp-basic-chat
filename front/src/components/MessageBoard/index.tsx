import styled from '@emotion/styled'
import {
  Box,
  List,
  ListSubheader,
  ListItem,
  Typography,
  Alert,
} from '@mui/material'
import dayjs from 'dayjs'
import { MessageForm } from '@/components/MessageForm'
import { useEffect, createRef, useCallback } from 'react'

type Props = {
  messages?: Partial<Message>[]
  tenant_name?: string
  onSubmit?: (value: string) => Promise<void>
}

export const MessageBoard = ({ messages, tenant_name, onSubmit }: Props) => {
  const ref = createRef<HTMLDivElement>()
  const scrollToBottomOfList = useCallback(() => {
    if (!ref || !ref.current) return
    ref.current.scrollIntoView({
      behavior: 'auto',
      block: 'end',
    })
  }, [ref])

  useEffect(() => {
    messages && scrollToBottomOfList()
  }, [messages, scrollToBottomOfList])

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateRows: '1fr auto',
        alignItems: 'flex-end',
        width: '100%',
        height: 'calc(90vh - 52px)',
        maxWidth: 1200,
        borderRadius: '8px',
        pb: 2,
      }}
    >
      <List
        subheader={
          <ListSubheader sx={{ borderRadius: '8px', fontWeight: 'bold' }}>
            {tenant_name ? tenant_name : ''}
          </ListSubheader>
        }
        id="messageList"
        sx={{
          display: 'inline-block',
          overflowY: 'auto',
          height: '80vh',
          width: '100%',
          border: '1px solid #eceff1',
          borderRadius: { sm: 0, md: '8px' },
        }}
      >
        {messages?.map((message) => {
          return (
            <ListItem key={message.id} sx={{ py: 2 }}>
              <MessageWrapper>
                <Typography
                  variant="caption"
                  sx={{
                    position: 'absolute',
                    top: '-16px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {message.user_id}さん{' '}
                  {dayjs(message.created_at).format('YYYY/MM/DD HH:mm')}
                </Typography>
                <Alert
                  icon={false}
                  sx={{
                    bgcolor: '#eceff1',
                    color: '#000000',
                    textAlign: 'justify',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {message.message}
                </Alert>
              </MessageWrapper>
            </ListItem>
          )
        })}
        {/* スクロールさせるための空div */}
        <div ref={ref}></div>
      </List>
      <MessageForm onClickSendIcon={onSubmit} onKeyDownInput={onSubmit} />
    </Box>
  )
}

const MessageWrapper = styled.div`
  position: relative;
`
