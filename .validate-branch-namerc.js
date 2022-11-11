module.exports = {
  pattern: '^(develop|candidate|master)$|^(bump|feat|fix|rel(?:ease)?)/.+$',
  errorMsg:
    '🤨 Branch doesnt respect the convention, please rename it: `git branch -m <current-name> <new-name>`',
}